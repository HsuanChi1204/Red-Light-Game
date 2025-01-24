import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import TWEEN, { Group } from "@tweenjs/tween.js";
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { DynamoDBClient, PutItemCommand, QueryCommand } from "@aws-sdk/client-dynamodb";

// 初始化 AWS 客戶端時，不要直接提供密鑰，改用環境變數
const client = new DynamoDBClient({
  region: "us-east-2",
});


function initHomePage() {
  const homePage = document.createElement("div");
  homePage.id = "home-page";
  document.body.appendChild(homePage);

  // 設定背景全黑
  homePage.style.backgroundColor = "#000";
  homePage.style.color = "#fff";
  homePage.style.display = "flex";
  homePage.style.flexDirection = "column";
  homePage.style.alignItems = "center";
  homePage.style.justifyContent = "center";
  homePage.style.height = "100vh";

  // 加入圖片
  const imageContainer = document.createElement("div");
  imageContainer.id = "image-container";
  homePage.appendChild(imageContainer);

  const gameImage = document.createElement("img");
  gameImage.src = "/models/background.png"; // 替換成你的圖片路徑
  gameImage.alt = "Game Banner";
  gameImage.style.width = "100%";
  gameImage.style.maxWidth = "800px";
  gameImage.style.marginBottom = "20px";
  imageContainer.appendChild(gameImage);

  // 輸入姓名
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Your Name";
  nameLabel.className = "name-label";
  nameLabel.style.marginBottom = "15px";
  homePage.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Enter Your Name";
  nameInput.className = "name-input";
  nameInput.style.marginBottom = "40px";
  homePage.appendChild(nameInput);

  // 選擇角色
  const roleLabel = document.createElement("label");
  roleLabel.textContent = "Choose a Character";
  roleLabel.className = "role-label";
  roleLabel.style.marginBottom = "20px";
  homePage.appendChild(roleLabel);

  const roleContainer = document.createElement("div");
  roleContainer.className = "role-container";
  homePage.appendChild(roleContainer);

  const loader = new GLTFLoader();

  for (let i = 1; i <= 3; i++) {
    const roleBox = document.createElement("div");
    roleBox.className = "role-box";

    const canvas = document.createElement("canvas");
    canvas.width = 250;
    canvas.height = 350;
    canvas.className = "role-canvas";
    roleBox.appendChild(canvas);
    roleContainer.appendChild(roleBox);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(canvas.width, canvas.height);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      canvas.width / canvas.height,
      0.1,
      1000
    );
    camera.position.z = 5;
    camera.position.x = 0;
    camera.position.y = 1;

    const light = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 2).normalize();
    scene.add(directionalLight);

    loader.load(`/models/player${i}.glb`, (gltf) => {
      const model = gltf.scene;
      const boundingBox = new THREE.Box3().setFromObject(model);
      const size = new THREE.Vector3();
      boundingBox.getSize(size);

      const scaleFactor = 2 / size.y;
      model.scale.set(scaleFactor, scaleFactor, scaleFactor);

      model.rotation.y = Math.PI;
      scene.add(model);

      let isHovered = false;

      roleBox.addEventListener("mouseenter", () => {
        isHovered = true;
      });

      roleBox.addEventListener("mouseleave", () => {
        isHovered = false;
        model.rotation.y = Math.PI;
      });

      function animate() {
        if (isHovered) {
          model.rotation.y += 0.04;
        }
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
      animate();
    });

    roleBox.addEventListener("click", () => {
      document.querySelectorAll(".role-box").forEach((el) => {
        el.classList.remove("selected");
      });
      roleBox.classList.add("selected");
      roleBox.setAttribute("data-role", `player${i}.glb`);
    });
  }

  // 進入遊戲按鈕
  const startButton = document.createElement("button");
  startButton.textContent = "Start";
  startButton.className = "start-button";
  startButton.style.marginTop = "10px";
  startButton.addEventListener("click", () => {
    const selectedName = nameInput.value.trim();
    const selectedRole = document.querySelector(".role-box.selected");

    if (!selectedName) {
      alert("Please Enter Your Name");
      return;
    }

    if (!selectedRole) {
      alert("please Choose a Character");
      return;
    }

    const selectedRoleModel = selectedRole.getAttribute("data-role");

    document.body.removeChild(homePage);
    initGame(selectedName, selectedRoleModel);
  });
  homePage.appendChild(startButton);
}


async function submitScore(playerName, score, time) {
  // console.log("提交分數參數：", { playerName, score, time });

  if (!playerName || score === undefined || time === undefined) {
      // console.error("參數未正確設置：", { playerName, score, time });
      return;
  }

  const payload = {
      playerId: `${playerName}_${Date.now()}`,
      name: playerName,
      score: parseFloat(score), // 確保分數為數值
      // time: parseFloat(time),   // 確保時間為數值
      timestamp: new Date().toISOString(),
      global: "all",
  };

  // console.log("發送的 payload：", payload);

  try {
      const response = await fetch(
          "https://za2bfpvm1l.execute-api.us-east-2.amazonaws.com/test/Leaderboard",
          {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
          }
      );

      if (!response.ok) {
          const errorResponse = await response.text();
          // console.error("提交分數失敗：", errorResponse);
          throw new Error(`提交分數失敗：${response.statusText}`);
      }

      const responseData = await response.json();
      // console.log("分數提交成功，回應內容：", responseData);
  } catch (error) {
      // console.error("提交分數時出錯：", error);
  }
}


async function getLeaderboard() {
  const url = "https://za2bfpvm1l.execute-api.us-east-2.amazonaws.com/test/Leaderboard";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // console.log("排行榜數據（未解析）：", data);

    // 如果 data.body 是字符串，需解析為陣列
    const leaderboard = typeof data.body === "string" ? JSON.parse(data.body) : data.body;

    // console.log("排行榜數據（已解析）：", leaderboard);

    // 使用 .map() 遍歷排行榜數據
    return leaderboard.map((item) => ({
      name: item.name,
      score: parseFloat(item.score),
      time: parseFloat(item.time),
    }));
  } catch (error) {
    // console.error("獲取排行榜時出錯：", error);
    return [];
  }
}

function showLeaderboardPage(leaderboard) {
  // 清空畫面
  document.body.innerHTML = "";

  const leaderboardPage = document.createElement("div");
  leaderboardPage.id = "leaderboard-page";

  const title = document.createElement("h2");
  title.className = "leaderboard-title";
  title.textContent = "Leader Board";
  leaderboardPage.appendChild(title);

  const leaderboardList = document.createElement("div");
  leaderboardList.className = "leaderboard-list";

  leaderboard.forEach((entry, index) => {
    const entryDiv = document.createElement("div");
    entryDiv.className = "leaderboard-entry";

    const rankSpan = document.createElement("span");
    rankSpan.className = "entry-rank";
    rankSpan.textContent = `${index + 1}.`;

    const nameSpan = document.createElement("span");
    nameSpan.className = "entry-name";
    nameSpan.textContent = entry.name;

    const scoreSpan = document.createElement("span");
    scoreSpan.className = "entry-score";
    scoreSpan.textContent = `${entry.score} 分`;

    // const timeSpan = document.createElement("span");
    // timeSpan.className = "entry-time";
    // timeSpan.textContent = `${entry.time} 秒`;

    entryDiv.appendChild(rankSpan);
    entryDiv.appendChild(nameSpan);
    entryDiv.appendChild(scoreSpan);
    // entryDiv.appendChild(timeSpan);

    leaderboardList.appendChild(entryDiv);
  });

  leaderboardPage.appendChild(leaderboardList);

  const homeButton = document.createElement("button");
  homeButton.className = "home-button";
  homeButton.textContent = "Return Home Page";
  homeButton.addEventListener("click", () => location.reload());
  leaderboardPage.appendChild(homeButton);

  document.body.appendChild(leaderboardPage);
}

  

// 初始化遊戲（填入現有遊戲邏輯）
function initGame(playerName, playerModelPath) {
  console.log(`Player Name: ${playerName}`);
  // console.log(`Player Model: ${playerModelPath}`);

  startCameraDetection();

  const labelRenderer = new CSS2DRenderer();
  labelRenderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.domElement.style.position = "absolute";
  labelRenderer.domElement.style.top = "0";
  document.body.appendChild(labelRenderer.domElement);
  
  // 初始化場景、攝影機、渲染器
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // 背景
  const snowBackgroundTexture = new THREE.TextureLoader().load(
    "/textures/snow_background.jpg"
  );
  scene.background = snowBackgroundTexture;

  // 地面
  const textureLoader = new THREE.TextureLoader();
  const snowTexture = textureLoader.load("/textures/snow.jpg");
  const planeMaterial = new THREE.MeshStandardMaterial({
    map: snowTexture,
  });
  planeMaterial.map.wrapS = planeMaterial.map.wrapT = THREE.RepeatWrapping;
  const planeGeometry = new THREE.PlaneGeometry(20, 50);
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -Math.PI / 2;
  scene.add(plane);

  // 添加光源
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(10, 20, 10);
  scene.add(directionalLight);

  // 模型變數
  let playerModel, ghostModel, playerLabel;
  let ghostTurning = false;
  let ghostLookingBack = false;
  let isGameOver = false;
  let isJumping = false;
  let footprints = [];
  let startTime, endTime;
  let playerBoxHelper;
  const obstacleHelpers = [];
  const obstacleEdgesHelpers = [];

  // 初始化 moveDirection
  let moveDirection = { left: false, right: false, up: false, down: false };

  // 補間動畫群組
  const tweenGroup = new Group();

  // 音樂
  let backgroundMusic;
  try {
    backgroundMusic = new Audio("/audio/background.mp3");
    backgroundMusic.loop = true;
    window.addEventListener(
      "click",
      () => {
        backgroundMusic.play().catch((err) => console.error(err));
      },
      { once: true }
    );
  } catch (error) {
    console.error("音樂無法載入: ", error);
  }

  // 加載模型
  const loader = new GLTFLoader();
  loader.load(`/models/${playerModelPath}`, (gltf) => {
    playerModel = gltf.scene;

    // 統一比例，例如統一高度為 1
    const boundingBox = new THREE.Box3().setFromObject(playerModel);
    const size = new THREE.Vector3();
    boundingBox.getSize(size);

    const scaleFactor = 2 / size.y; // 統一高度為 1
    playerModel.scale.set(scaleFactor, scaleFactor, scaleFactor);

    playerModel.position.set(0, 0.5, -20); // 初始化位置
    playerModel.traverse((child) => {
      if (child.isMesh) child.castShadow = true;
    });
    scene.add(playerModel);

    const nameDiv = document.createElement("div");
    nameDiv.className = "player-name";
    nameDiv.style.color = "white";
    nameDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    nameDiv.style.padding = "2px 5px";
    nameDiv.style.borderRadius = "3px";
    nameDiv.textContent = playerName;

    playerLabel = new CSS2DObject(nameDiv);
    playerLabel.position.set(0, 2, 0);
    playerModel.add(playerLabel);

    const playerBox = new THREE.Box3().setFromObject(playerModel);
    playerBoxHelper = new THREE.Box3Helper(playerBox, 0x0000ff);
    // scene.add(playerBoxHelper);

    startTime = performance.now();
    // 確保邊界框動態更新
    function updatePlayerBox() {
      if (playerModel) {
        playerBox.setFromObject(playerModel);
        playerBoxHelper.box.copy(playerBox);
      }
    }
    // 更新 player 的高度，確保其在地面上行走
    playerModel.position.y = 0; // 確保與地面對齊
  
    generateObstaclesForRole(playerModelPath);

    // 在遊戲循環中添加更新
    const originalGameLoop = gameLoop;
    gameLoop = function () {
      updatePlayerBox();
      originalGameLoop();
    };
  });

  // 加載 ghost 模型
  loader.load("/models/ghost.glb", (gltf) => {
    ghostModel = gltf.scene;
    ghostModel.position.set(0, 0, 20);
    ghostModel.scale.set(3, 3, 3);
    ghostModel.traverse((child) => {
      if (child.isMesh) child.castShadow = true;
    });
    scene.add(ghostModel);

    function ghostTurnBack() {
      if (isGameOver || !ghostModel) return;

      ghostTurning = true;
      const rotationStart = ghostModel.rotation.y;
      const rotationTarget = (rotationStart + Math.PI) % (2 * Math.PI);
      const rotationDuration = Math.random() * 1000 + 500; // 隨機 1-3 秒

      new TWEEN.Tween({ angle: rotationStart }, tweenGroup)
        .to({ angle: rotationTarget }, rotationDuration)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate((obj) => {
          ghostModel.rotation.y = obj.angle;
        })
        .onComplete(() => {
          ghostLookingBack = true;
          ghostTurning = false; // 回頭完成，靜止狀態
          setTimeout(() => {
            if (isGameOver) return;
            new TWEEN.Tween({ angle: rotationTarget }, tweenGroup)
              .to({ angle: rotationStart }, rotationDuration)
              .easing(TWEEN.Easing.Quadratic.InOut)
              .onUpdate((obj) => {
                ghostModel.rotation.y = obj.angle;
              })
              .onComplete(() => {
                ghostLookingBack = false;
                ghostTurnBack(); // 循環回頭機制
              })
              .start();
          }, Math.random() * 2000 + 2000); // 隨機 1-3 秒
        })
        .start();
    }

    ghostTurnBack();
  });

  // 添加 Ghost 通關線
  const goalLineGeometry = new THREE.PlaneGeometry(20, 0.1);
  const goalLineMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const goalLine = new THREE.Mesh(goalLineGeometry, goalLineMaterial);
  goalLine.rotation.x = -Math.PI / 2;
  goalLine.position.set(0, 0.01, 20); // 設定通關線位置為 Ghost 所在位置
  scene.add(goalLine);

  // 添加障礙物，並附加邊界線
  const obstacles = [];
  function createObstacle(x, y, z, size) {
    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshStandardMaterial({ color: 0x8b0000 });
    const obstacle = new THREE.Mesh(geometry, material);
    obstacle.position.set(x, y, z);
    scene.add(obstacle);
    obstacles.push(obstacle);
  }

  // 生成障礙物
  function generateObstaclesForRole(role) {
    // 固定玩家的位置
    const playerPosition = { x: 0, y: 0.5, z: -20 };
    // console.log("固定玩家位置：", playerPosition);

    // 清空現有障礙物
    obstacles.forEach((obstacle) => scene.remove(obstacle));
    obstacles.length = 0;

    // 設定障礙物參數根據角色
    let obstacleConfig;
    if (role === "player1.glb") {
      obstacleConfig = { count: 4, sizeRange: [1, 2], positionRange: [-8, 8] };
    } else if (role === "player2.glb") {
      obstacleConfig = { count: 5, sizeRange: [1.5, 3], positionRange: [-6, 6] };
    } else if (role === "player3.glb") {
      obstacleConfig = { count: 7, sizeRange: [0.8, 1.5], positionRange: [-10, 10] };
    } else {
      console.error("未知的角色類型：", role);
      return;
    }

    const minDistanceToPlayer = 2; // 障礙物與玩家之間的最小距離

    // 隨機生成障礙物
    for (let i = 0; i < obstacleConfig.count; i++) {
      let validPosition = false;
      let x, z;

      // 不斷嘗試生成，直到位置有效
      while (!validPosition) {
        const size = Math.random() * (obstacleConfig.sizeRange[1] - obstacleConfig.sizeRange[0]) + obstacleConfig.sizeRange[0];
        x = Math.random() * (obstacleConfig.positionRange[1] - obstacleConfig.positionRange[0]) + obstacleConfig.positionRange[0];
        z = Math.random() * 40 - 20; // 障礙物分布在地面上 -20 到 20 的範圍

        // 計算與玩家的距離
        const dx = x - playerPosition.x;
        const dz = z - playerPosition.z;
        const distance = Math.sqrt(dx * dx + dz * dz);

        if (distance >= minDistanceToPlayer) {
          validPosition = true;
          createObstacle(x, 0.5, z, size); // 生成障礙物
        } else {
          // console.warn(`障礙物位置太接近玩家 (距離: ${distance.toFixed(2)}), 重新生成位置。`);
        }
      }
    }

    // console.log(`已為角色 ${role} 生成 ${obstacleConfig.count} 個障礙物。`);
  }

  // 碰撞檢測（基於邊界線）
  function checkCollisions() {
    if (!playerModel) return;

    // 確保更新世界矩陣
    playerModel.updateMatrixWorld();
    obstacles.forEach((obstacle) => obstacle.updateMatrixWorld());

    // 更新玩家的邊界盒
    const playerBox = new THREE.Box3().setFromObject(playerModel);
    playerBoxHelper.box.copy(playerBox);

    for (let i = 0; i < obstacles.length; i++) {
      const obstacle = obstacles[i];
      const obstacleBox = new THREE.Box3().setFromObject(obstacle);

      // 檢測玩家與障礙物的邊界是否相交
      if (playerBox.intersectsBox(obstacleBox)) {
        // console.log("Collision detected with obstacle edges!");
        isGameOver = true;
        showMessage("Game Over<br>Collided with obstacles");
        if (backgroundMusic) backgroundMusic.pause();
        showRestartButton();
        return;
      }
    }
  }

  // 添加腳印
  function addFootprint(position) {
    const footprintGeometry = new THREE.CircleGeometry(0.2, 32);
    const footprintMaterial = new THREE.MeshStandardMaterial({
      color: 0x555555,
    });
    const footprint = new THREE.Mesh(footprintGeometry, footprintMaterial);
    footprint.rotation.x = -Math.PI / 2;
    footprint.position.set(position.x, position.y + 0.01, position.z);
    footprints.push(footprint);
    scene.add(footprint);

    setTimeout(() => {
      scene.remove(footprint);
      footprints = footprints.filter((fp) => fp !== footprint);
    }, 1500); // 足跡在 1.5 秒內消失
  }


  // 檢查掉落地板外
  function checkOutOfBounds() {
    if (
      playerModel &&
      (playerModel.position.x > 10 || playerModel.position.x < -10)
    ) {
      isGameOver = true;
      showMessage("Game Over<br>You Fall Down!");
      const fallDown = new TWEEN.Tween(playerModel.position, tweenGroup)
        .to({ y: -5 }, 1000)
        .easing(TWEEN.Easing.Bounce.Out)
        .onComplete(() => {
          playerModel.visible = false;
        });
      fallDown.start();
      if (backgroundMusic) backgroundMusic.pause();
      showRestartButton();
    }
  }

  let motionDetected = false; // 用於遊戲邏輯的全局變數
  let lastImageData = null; // 上一幀的圖像數據
  let motionAverage = 0; // 存儲平滑後的平均變化值
  const motionThreshold = 10; // 初始的變化檢測門檻
  const smoothingFactor = 0.3; // 平滑化參數
  let motionFrameThreshold = 2; // 檢測連續動作所需幀數
  let consecutiveMotionFrames = 0; // 計算連續高變化幀數
  let stableFrames = 0; // 初始穩定幀數
  
  function startCameraDetection() {
    const video = document.createElement("video");
    video.autoplay = true;
    video.style.display = "none"; // 隱藏視頻元素
    document.body.appendChild(video);
  
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d", { willReadFrequently: true }); // 優化讀取效率
  
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
  
        video.addEventListener("loadeddata", () => {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
  
          function detectMotion() {
            if (isGameOver) return; // 遊戲結束時停止檢測
  
            // 繪製當前幀到畫布
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const currentImageData = context.getImageData(
              0,
              0,
              canvas.width,
              canvas.height
            );
  
            // 比較當前幀與上一幀
            if (lastImageData) {
              let diff = 0;
              const length = currentImageData.data.length;
  
              for (let i = 0; i < length; i += 4) {
                const rDiff = Math.abs(
                  currentImageData.data[i] - lastImageData.data[i]
                );
                const gDiff = Math.abs(
                  currentImageData.data[i + 1] - lastImageData.data[i + 1]
                );
                const bDiff = Math.abs(
                  currentImageData.data[i + 2] - lastImageData.data[i + 2]
                );
                diff += rDiff + gDiff + bDiff;
              }
  
              // 計算平均變化
              const avgDiff = diff / (length / 4);
  
              // 忽略初始異常幀
              if (stableFrames < 10) {
                stableFrames++;
                motionAverage = 0; // 清除初始影響
              } else {
                motionAverage =
                  motionAverage * smoothingFactor + avgDiff * (1 - smoothingFactor); // 平滑處理
              }
  
              // 動態調整判定門檻
              const dynamicThreshold =
                stableFrames > 10 ? motionThreshold : motionThreshold * 1.1;
  
              if (motionAverage > dynamicThreshold) {
                consecutiveMotionFrames++;
                if (consecutiveMotionFrames >= motionFrameThreshold) {
                  if (!motionDetected) {
                    // console.log("Motion detected!");
                  }
                  motionDetected = true;
                }
              } else {
                consecutiveMotionFrames = 0;
                if (motionDetected) {
                  // console.log("Motion no longer detected.");
                }
                motionDetected = false;
              }
  
              // 打印測試數據
              // console.log(
              //   `Diff: ${avgDiff.toFixed(2)}, Smoothed: ${motionAverage.toFixed(
              //     2
              //   )}, Detected: ${motionDetected}`
              // );
            }
  
            lastImageData = currentImageData; // 更新上一幀
            requestAnimationFrame(detectMotion); // 繼續檢測
          }
  
          detectMotion();
        });
      })
      .catch((error) => {
        console.error("Couldn't turn on camera：", error);
      });
  }
  
  
  // 檢查 Ghost 回頭時的規則
  function checkGhostRules() {
    if (
      ghostLookingBack && // Ghost 正在回頭靜止狀態
      !ghostTurning && // 確保 Ghost 沒有在旋轉中
      Math.abs((ghostModel.rotation.y % (2 * Math.PI)) - Math.PI) < 0.01 && // Ghost 僅在 180 度位置時判定
      (moveDirection.up ||
        moveDirection.left ||
        moveDirection.right ||
        moveDirection.down ||
        isJumping|| // 玩家有移動
        motionDetected) // 鏡頭前的玩家有移動
    ) {
      isGameOver = true;
      // 如果因為鏡頭檢測到玩家動作，顯示特定訊息
      if (motionDetected) {
        showMessage("Game Over<br>You Move!");
      } else {
        showMessage("Game Over<br>You Move!");
      }
      if (backgroundMusic) backgroundMusic.pause();
      showRestartButton();

      // 添加光線效果
      const ghostEyePosition = new THREE.Vector3();
      ghostModel.getWorldPosition(ghostEyePosition);
      ghostEyePosition.y += 7; // 提升光線起點，模擬鬼的眼睛高度

      const playerPosition = new THREE.Vector3();
      playerModel.getWorldPosition(playerPosition);

      const lightBeamGeometry = new THREE.BufferGeometry();
      const vertices = new Float32Array([
        ghostEyePosition.x,
        ghostEyePosition.y,
        ghostEyePosition.z, // 起點
        playerPosition.x,
        playerPosition.y,
        playerPosition.z, // 終點
      ]);
      lightBeamGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(vertices, 3)
      );

      const lightMaterial = new THREE.LineBasicMaterial({
        color: 0xff0000, // 紅色
        linewidth: 300, // 線寬
        transparent: true,
        opacity: 0.5, // 半透明
      });

      const lightBeam = new THREE.Line(lightBeamGeometry, lightMaterial);
      scene.add(lightBeam);

    // **新增音效播放**
    const ghostSound = new Audio("/audio/shot.mp3"); // 預留音效來源
    ghostSound.play().catch((err) => console.error("音效播放失敗: ", err));

    // 光線在 2 秒後消失
    setTimeout(() => {
      scene.remove(lightBeam);

      // 玩家倒下動畫
      const fallDuration = 1000; // 倒下動畫持續時間
      const initialRotation = playerModel.rotation.x;
      const fallTargetRotation = Math.PI / 2; // 倒下角度（前倒在地）
      const initialY = playerModel.position.y;
      const fallTargetY = 0; // 倒下後的地面高度

      new TWEEN.Tween({ rotation: initialRotation, y: initialY })
        .to({ rotation: fallTargetRotation, y: fallTargetY }, fallDuration)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate((obj) => {
          playerModel.rotation.x = obj.rotation; // 更新玩家的旋轉
          playerModel.position.y = obj.y; // 更新玩家的高度
        })
        .onComplete(() => {
          showMessage("Game Over<br>>You Move!");
          showRestartButton();
          if (backgroundMusic) backgroundMusic.pause();
        })
        .start();
    }, 2000); // 光線顯示後再觸發倒下動畫
    }
  }
  // 在通關時提交成績並顯示排行榜
  function handleWin(playerName, score, timeTaken) {
    // console.log("handleWin 接收到的參數：", { playerName, score, timeTaken });

    if (score === undefined || timeTaken === undefined) {
        // console.error("handleWin 中參數不正確：", { score, timeTaken });
        return;
    }

    showRestartAndSubmitButtons(playerName, score, timeTaken);
}

  

  // 檢查是否過關
  function checkGoalLine() {
    if (playerModel && playerModel.position.z >= goalLine.position.z) {
      isGameOver = true;
          // 確保 endTime 與 startTime 正確計算
    if (startTime) {
      endTime = performance.now();
      const timeTaken = ((endTime - startTime) / 1000).toFixed(2);

    // 假設分數邏輯為 1000 減去每秒扣分
    const score = Math.max(0, 1000 - timeTaken * 10).toFixed(2);

    showMessage(`Congratulations! <br> ${playerName} <br> Total Time: ${timeTaken} sec.`);
    handleWin(playerName, score, timeTaken); // 傳遞正確的分數和時間
    } else {
      showMessage("Congratulations! <br> Too Fast!");
    }

    showRestartAndSubmitButtons(playerName);
      if (backgroundMusic) backgroundMusic.pause();
    }
  }

  // 顯示訊息
  function showMessage(message) {
    const messageDiv = document.createElement("div");
    messageDiv.id = "game-message";
    messageDiv.innerHTML = message;
    messageDiv.style.position = "absolute";
    messageDiv.style.top = "40%";
    messageDiv.style.left = "50%";
    messageDiv.style.transform = "translate(-50%, -50%)";
    messageDiv.style.padding = "20px";
    messageDiv.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    messageDiv.style.color = "white";
    messageDiv.style.fontSize = "24px";
    messageDiv.style.zIndex = "1000"; // 確保訊息顯示在最上層

    document.body.appendChild(messageDiv);

    // if (hidePlayerLabel && playerLabel) {
    //   playerLabel.element.style.display = "none";
    // }
  }


  // 重置遊戲
  function resetGame() {
    location.reload();
  }

  function showRestartButton() {
    const restartButton = document.createElement("button");
    restartButton.id = "restart-button";
    restartButton.textContent = "Restart";
    restartButton.style.position = "absolute";
    restartButton.style.top = "60%";
    restartButton.style.left = "50%";
    restartButton.style.transform = "translate(-50%, -50%)";
    restartButton.style.padding = "10px 20px";
    restartButton.style.fontSize = "20px";
    document.body.appendChild(restartButton);
    restartButton.addEventListener("click", resetGame);
  }

  function showRestartAndSubmitButtons(playerName, score, timeTaken) {
    if (!playerName || score === undefined || timeTaken === undefined) {
      // console.error("showRestartAndSubmitButtons 中參數不正確：", { playerName, score, timeTaken });
      return;
  }
    const buttonContainer = document.createElement("div");
    buttonContainer.style.position = "absolute";
    buttonContainer.style.top = "60%";
    buttonContainer.style.left = "50%";
    buttonContainer.style.transform = "translate(-50%, -50%)";
    buttonContainer.style.display = "flex";
    buttonContainer.style.gap = "10px";
    document.body.appendChild(buttonContainer);
  
    // 重啟按鈕
    const restartButton = document.createElement("button");
    restartButton.id = "restart-button";
    restartButton.textContent = "Restart";
    restartButton.addEventListener("click", () => location.reload());
    buttonContainer.appendChild(restartButton);
  
    // 提交按鈕
    const submitButton = document.createElement("button");
    submitButton.id = "submit-button";
    submitButton.textContent = "Submit";
  
    // 明確使用捕獲的參數
    // console.log("接收到的參數：", { playerName, score, timeTaken });

    const capturedPlayerName = playerName;
    const capturedScore = score;
    const capturedTimeTaken = timeTaken;

    submitButton.addEventListener("click", async () => {
      // console.log("提交按鈕點擊事件捕獲的參數：", {
      //     playerName: capturedPlayerName,
      //     score: capturedScore,
      //     timeTaken: capturedTimeTaken,
      // });
  
      // 提交分數
      await submitScore(capturedPlayerName, capturedScore, capturedTimeTaken);
  
      // 跳轉到排行榜頁面
      const leaderboard = await getLeaderboard();
      showLeaderboardPage(leaderboard);
    });
    buttonContainer.appendChild(submitButton);
  }
  
  
  // 鍵盤控制
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") moveDirection.up = true;
    if (e.key === "ArrowRight") moveDirection.left = true;
    if (e.key === "ArrowLeft") moveDirection.right = true;
    if (e.key === "ArrowDown") moveDirection.down = true;
    if (e.key === " " && !isJumping && playerModel) {
      isJumping = true;
      const jumpHeight = 3;
      const jumpDuration = 300; // 調整跳躍速度
      const initialY = playerModel.position.y;
      // **新增音效播放**
      const jumpSound = new Audio("/audio/jump_sound.mp3"); // 預留音效來源
      jumpSound.play().catch((err) => console.error("跳躍音效播放失敗: ", err));


      const jumpUp = new TWEEN.Tween(playerModel.position, tweenGroup)
        .to({ y: initialY + jumpHeight }, jumpDuration)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onComplete(() => {
          const fallDown = new TWEEN.Tween(playerModel.position, tweenGroup)
            .to({ y: initialY }, jumpDuration)
            .easing(TWEEN.Easing.Quadratic.In)
            .onComplete(() => {
              isJumping = false;
            });
          fallDown.start();
        });

      jumpUp.start();
    }
  });

  window.addEventListener("keyup", (e) => {
    if (e.key === "ArrowUp") moveDirection.up = false;
    if (e.key === "ArrowRight") moveDirection.left = false;
    if (e.key === "ArrowLeft") moveDirection.right = false;
    if (e.key === "ArrowDown") moveDirection.down = false;
  });

  function gameLoop() {
    if (isGameOver) return;

    if (playerModel) {
      // 模擬走路或跑步
      let step = 0; // 用於模擬腳步
      labelRenderer.render(scene, camera);

      if (moveDirection.up) {
        playerModel.rotation.y = 0; // 朝向正前方
        playerModel.position.z += 0.1;
        addFootprint(playerModel.position);
        step += 0.1; // 增加步伐值
        const yOffset = Math.sin(step) * 0.1; // 模擬上下移動
        playerModel.position.y = 0.5 + yOffset; // y 軸上的上下移動
      }
      if (moveDirection.left) {
        playerModel.rotation.y = -Math.PI / 2; // 朝向左邊
        playerModel.position.x -= 0.1;
        addFootprint(playerModel.position);
      }
      if (moveDirection.right) {
        playerModel.rotation.y = Math.PI / 2; // 朝向右邊
        playerModel.position.x += 0.1;
        addFootprint(playerModel.position);
      }
      if (moveDirection.down) {
        playerModel.rotation.y = Math.PI; // 朝向正後方
        playerModel.position.z -= 0.1;
        addFootprint(playerModel.position);
      }
      

      playerModel.updateMatrixWorld();
      obstacles.forEach((obstacle) => obstacle.updateMatrixWorld());

      checkCollisions();
      checkOutOfBounds();
      checkGoalLine();
      checkGhostRules();

      camera.position.set(
        playerModel.position.x,
        playerModel.position.y + 5,
        playerModel.position.z - 10
      );
      camera.lookAt(playerModel.position);
    }
    // 如果檢測到鏡頭前的玩家有動作
    if (motionDetected) {
      isGameOver = true;
      showMessage("Game Over<br>You Move!");
      if (backgroundMusic) backgroundMusic.pause();
      showRestartButton();
    }
    tweenGroup.update();
    renderer.render(scene, camera);
    requestAnimationFrame(gameLoop);
  }

  gameLoop();
}
// 呼叫首頁初始化
initHomePage();
