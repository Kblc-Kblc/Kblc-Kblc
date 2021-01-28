<template>
  <div class="menu">
    <div class="_container">
      <div class="menu__row">
        <div class="menu__columns">
          <ul class="menu__list">
            <li>
              <router-link class="menu__link" to="castomStatic"
                >Кастомная статика</router-link
              >
            </li>
            <li>
              <router-link class="menu__link" to="innok"
                >Анимация 3D</router-link
              >
            </li>
            <li>
              <router-link class="menu__link" to="about"
                >Связь со мной</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
$red: #f8d948;
$brown: #584e4a;
$whitey: #f0f0f0;

$duration: 0.2s;
$distance: 8px;
$easeOutBack: cubic-bezier(0.175, 0.885, 0.32, 1.275);

.menu {
  padding: 7vh 0px 0px 0px;
  &__row {
  }

  &__columns {
  }

  &__list {
    display: flex;
    justify-content: space-between;
    @media (max-width: 767.98 + px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      li {
        padding: 0px 0px 30px 0px;
      }
    }
  }

  &__link {
    color: #ffffff;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 2.6px;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 20px;
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
</style>
