<template>
  <div class="static">
    <div class="_container">
      <div class="static__row">
        <div class="static__columns">
          <div class="static-body">
            <div class="static-body__title">
              <h2>Кастомно сверстанная статика</h2>
            </div>
            <div class="static-body__description">
              <p>
                Привет. Рад тебя видеть на одной из страниц своего портфолио!
                Здесь, ниже ссылки, находится моя работа со статическим сайтом.
                Что там имеется?
              </p>
            </div>
            <ul class="static-body__list">
              <li>
                <p>
                  <span>HTML.</span> Выравнивание выполненно по технологии
                  flexbox. Контентные блоки независимы друг от друга и могут
                  быть периспользованы.
                </p>
              </li>
              <li>
                <p>
                  <span>CSS.</span> Быстроту работы со стилями обеспечил
                  препроцессор SCSS. Переменные, миксины, минификация и т.д..
                </p>
              </li>
              <li>
                <p>
                  <span>JS.</span> Обеспечивает логику динамического отображения
                  контента. Здесь это слайдер swiper, проверка валидации и
                  другие эффекты.
                </p>
              </li>
              <li>
                <p>
                  <span>Сборщик.</span> Помогал мне соединить все части проекта
                  в один - сборщик gulp.
                </p>
              </li>
            </ul>
            <div class="static-body__link mylink">
              <ul class="mylink__list">
                <li>
                  <a
                    href="https://kblc-kblc.github.io/Kblc-Kblc/guardian1/"
                    target="_blank"
                    class="mylink__link"
                    >Страница №1</a
                  >
                </li>
                <li>
                  <a
                    href="https://kblc-kblc.github.io/Kblc-Kblc/guardian02/"
                    target="_blank"
                    class="mylink__link"
                    >Страница №2</a
                  >
                </li>
                <li>
                  <a
                    href="https://kblc-kblc.github.io/Kblc-Kblc/guardian3/"
                    target="_blank"
                    class="mylink__link"
                    >Страница №3</a
                  >
                </li>
                <li>
                  <a
                    href="https://kblc-kblc.github.io/Kblc-Kblc/guardian4/"
                    target="_blank"
                    class="mylink__link"
                    >Страница №4</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <router-link class="mainLink" to="../../index.html"
          >На главную</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.static {
  position: absolute;
  height: 90vh;
  width: 100vw;
  background: rgba(000, 000, 000, 0.8);
  @media (max-width: 767.98 + px) {
    background: rgba(000, 000, 000, 0);
  }

  &__row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media (max-width: 767.98 + px) {
      flex-direction: column;
     background: rgba(000, 000, 000, 0.8);
    }
  }

  &__columns {
  }
}

.static-body {
  padding: 17vh 0px 0px 0px;
  color: white;
  @media (max-width: 767.98 + px) {
    padding: 10vh 0px 0px 0px;
  }
  &__title {
    text-align: center;
    padding: 0px 0px 5vh 0px;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 48px;
    text-transform: uppercase;
  }

  &__description {
    padding: 0px 0px 30px 0px;
    font-size: 20px;
    line-height: 36px;
    text-align: center;
  }

  &__list {
    span {
      color: #939597;
    }
    font-size: 18px;
    line-height: 36px;
    padding: 0px 0px 9vh 0px;
    @media (max-width: 767.98 + px) {
      padding: 0px 0px 5vh 0px;
    }
  }

  &__link {
  }
}

.static-body {
  &__link {
  }
}
.mylink {
  $red: #ffffff;
  $brown: #584e4a;
  $whitey: #f0f0f0;

  $duration: 0.2s;
  $distance: 8px;
  $easeOutBack: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-align: center;

  &__list {
    display: flex;
    justify-content: space-between;
    @media (max-width: 767.98 + px) {
      flex-direction: column;
      li {
        padding: 0px 0px 20px 0px;
      }
    }
  }

  &__link {
    padding: 0px 4vw 0px 0px;
    color: #f8d948;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2.6px;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    padding: 0;
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 30px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: $red;
    }
    &:before {
      opacity: 0;
      transform: translateY(-$distance);
      transition: transform 0s $easeOutBack, opacity 0s;
    }
    &:after {
      opacity: 0;
      transform: translateY($distance/2);
      transition: transform $duration $easeOutBack, opacity $duration;
    }
    &:hover,
    &:focus {
      &:before,
      &:after {
        opacity: 1;
        transform: translateY(0);
      }
      &:before {
        transition: transform $duration $easeOutBack, opacity $duration;
      }
      &:after {
        transition: transform 0s $duration $easeOutBack, opacity 0s $duration;
      }
    }
  }
}
.mainLink {
  color: white;
  text-align: center;
  padding: 15px 20px;
  margin: 90px 0px 0px 0px;
  border: 1px solid white;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 767.98 + px) {
     margin: 20px 0px 30px 0px;
  }
}
</style>