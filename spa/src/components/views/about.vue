<template>
  <div class="about">
    <div class="_container">
      <div class="about__row">
        <div class="about__columns">
          <div class="about-body">
            <div class="about-body__git">
              <a target="_blank" href="https://github.com/Kblc-Kblc/Kblc-Kblc"
                >Мой GitHub</a
              >
            </div>
            <div class="about-body__tg">
              <a target="_blank" href="https://t.me/kblckblc"
                >Связь со мной в Telegram</a
              >
            </div>
            <div class="about-body__hh">
              <a
                target="_blank"
                href="https://spb.hh.ru/resume/d4e2da95ff088e99d00039ed1f447961514c4e"
                >Резюме на hh</a
              >
            </div>
            <div class="about-body__description">
              <span>Vue</span>
              <p>
                Данное приложение сделано на фреймворке "vue" в связке с webpack.
              </p>
            </div>
          </div>
        </div>
        <router-link class="about__mainLink" to="../../index.html"
          >На главную</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
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
      margin: 20px 0px 30px 0px;
    }
  }
}

.about-body {
  $red: #ffffff;
  $brown: #584e4a;
  $whitey: #f0f0f0;

  $duration: 0.2s;
  $distance: 8px;
  $easeOutBack: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  a {
    color: #f8d948;
  }
  text-align: center;
  padding: 25vh 0px 0vh 0px;
  @media (max-width: 767.98 + px) {
    padding: 12vh 0px 0vh 0px;
    max-width: 400px;
    margin: 0px auto;
  }
  &__git {
    margin: 0px 30px 0px 0px;
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2.6px;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    padding: 0;
    @media (max-width: 767.98 + px) {
      margin: 0px 0px 20px 0px;
    }
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

  &__hh {
    margin: 0px 0px 0px 30px;
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2.6px;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    padding: 0;
    @media (max-width: 767.98 + px) {
      margin: 0px 0px 0px 0px;
    }
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

  &__tg {
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2.6px;
    position: relative;
    text-decoration: none;
    line-height: 24px;
    cursor: pointer;
    padding: 0;
    @media (max-width: 767.98 + px) {
      margin: 0px 0px 20px 0px;
    }
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

  &__description {
    margin: 100px 0px 0px 0px;
    color: white;
    font-size: 20px;
    line-height: 36px;
    text-align: center;
    span {
      color: #939597;
    }
    @media (max-width: 767.98 + px) {
      margin: 50px 0px 0px 0px;
    }
  }
}
</style>