const article = `<div class="news__list">

    <div class="news">
        <div class="news__top">
            <div class="avatar_info">
                <img src="./Avatar.png" alt="#">
                <p class="avatar_text"> <span>in</span> <span class="avatar_topic"></span> · <span class="avatar_date"> </span> </p>
            </div>
            <div class="avatar_title"></div>
            <p class="avatar_content"></div>
        <div class="news__bottom">
            <div class="avatar_bottom-left">
                <button class="avatar_bth">JavaScript</button>
                <p class="avatar_txt"> 12 min read <span>·</span>Selected for you</p>
            </div>
            <div class="avatar_bottom-right">
                <div class="avatar_icon">
                <img src="./Notebook.png" alt="id1" />
                <img src="./Draw.png" alt="id2" />
                <img src="./Man.png" alt="id3" />
                </div>
            </div>
        </div>
    </div>
    <div class="image">
        <img class="news-image" alt="#">
    </div>

</div> `;

const spinner = `<div class="row" id="spinner">
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>`;

function loadArticles() {
  const promiseArticles = new Promise((resolve, reject) => {
    container.innerHTML = container.innerHTML + spinner;

    setTimeout(() => resolve(descrip), 3000);
  });

  promiseArticles
    .then((result) => {
      const spinnerToDelete = document.getElementById("spinner");
      spinnerToDelete.className = "loader-remove";

      if (result && result.length > 0) {
        result.forEach((resItem) => {
          const myNewArticle = myArticle.replace(
            `id="img">`,
            `id="img">${resItem.img1}`
          );
          container.innerHTML += myNewArticle;
        });
      } else if (result && result.length > 0) {
        result.forEach((resItem) => {
          const myNewImage = myArticle.replace(
            `id="text">`,
            `id="text">${resItem.title1}`
          );
          container.innerHTML += myNewImage;
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
