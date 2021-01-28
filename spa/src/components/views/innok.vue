<template>
  <div class="innok">
    <div class="_container">
      <div class="innok__row">
        <div class="innok__columns">
          <div class="innok-body">
            <div class="innok-body__title"><h2>3D модель - Иннокентий</h2></div>
            <div class="innok-body__description">
              <span>Three.js.</span>
              <p>
                Иннокентий - это мой первый эксперимент с библиотекой three.js и
                вставкой 3D в веб-проект. Технология 3D активно развивается и
                становится доступнее в современном вебе, а главное дешевле.
              </p>
            </div>
            <div class="innok-body__link">
              <a
                href="https://kblc-kblc.github.io/Kblc-Kblc/Innokentiy/"
                target="_blank"
                class="link"
              >
                В гости к Иннокентию
              </a>
            </div>
          </div>
        </div>
        <router-link class="innok-body__mainLink" to="../../index.html"
          >На главную</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
.innok {
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
      background: rgba(000, 000, 000, 0.8);
    }
  }

  &__columns {
    flex: 1 1 100%;
  }
}

.innok-body {
  text-align: center;
  $red: #ffffff;
  $brown: #584e4a;
  $whitey: #f0f0f0;

  $duration: 0.2s;
  $distance: 8px;
  $easeOutBack: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  padding: 17vh 0px 0px 0px;
  color: white;
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
    padding: 0px 0px 60px 0px;
    font-size: 20px;
    line-height: 36px;
    text-align: center;
    span {
      color: #939597;
    }
  }

  &__link {
    display: inline-block;
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

  .link {
    color: #f8d948;
  }

  &__mainLink {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 15px 20px;
    margin: 70px 0px 0px 0px;
    border: 1px solid white;
    &:hover {
      text-decoration: underline;
    }
    @media (max-width: 767.98 + px) {
      margin: 50px 0px 30px 0px;
    }
  }
}
</style>
