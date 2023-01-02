import "./styles.css";

// 未完了TODO作成処理
const funcCreateTodo = (taskName) => {
  // タスク名生成
  const textP = document.createElement("p");
  textP.className = "list-content";
  textP.innerText = taskName;

  // 完了ボタン生成
  const buttonComplete = document.createElement("button");
  buttonComplete.innerText = "完了";
  buttonComplete.addEventListener("click", () => {
    const completeTarget = buttonComplete.parentNode.parentNode; // button - div - li
    const completedTaskName =
      buttonComplete.parentNode.firstElementChild.innerText; // button - div - p.innertext
    const incompleteList = completeTarget.parentNode; // lu
    incompleteList.removeChild(completeTarget);
    funcCompleteTodo(completedTaskName);
  });

  // 削除ボタン生成
  const buttonDelete = document.createElement("button");
  buttonDelete.innerText = "削除";
  buttonDelete.addEventListener("click", () => {
    const deleteTarget = buttonDelete.parentNode.parentNode; // button - div - li
    const parentList = deleteTarget.parentNode; // lu
    parentList.removeChild(deleteTarget);
  });

  // タグ構築
  const div = document.createElement("div");
  div.className = "list-row";
  div.appendChild(textP);
  div.appendChild(buttonComplete);
  div.appendChild(buttonDelete);
  const li = document.createElement("li");
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(incompleteItem);
};

// 完了TODO作成処理
const funcCompleteTodo = (taskName) => {
  // タスク名生成
  const textP = document.createElement("p");
  textP.className = "list-content";
  textP.innerText = taskName;

  // 戻るボタン生成
  const buttonBack = document.createElement("button");
  buttonBack.innerText = "戻す";
  buttonBack.addEventListener("click", () => {
    const backTarget = buttonBack.parentNode.parentNode; // button - div - li
    const incompleteTaskName =
      buttonBack.parentNode.firstElementChild.innerText; // button - div - p.innertext
    // 完了リストから削除
    backTarget.parentNode.removeChild(backTarget);
    // 対象タスク名を元に未完了TODOを再生成・登録
    funcCreateTodo(incompleteTaskName);
  });

  // タグ構築
  const div = document.createElement("div");
  div.className = "list-row";
  div.appendChild(textP);
  div.appendChild(buttonBack);
  const li = document.createElement("li");
  li.appendChild(div);

  document.getElementById("complete-list").appendChild(completedItem);
};

// 新規タスク登録処理
const onClickAdd = () => {
  // タスクを追加する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  funcCreateTodo(inputText);
};

// イベントリスナ登録
document.getElementById("add-button").addEventListener("click", onClickAdd);
