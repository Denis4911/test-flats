<template>
  <article v-if="flat" class="flat-card">
    <div class="flat-card__head">
      <span class="flat-card__head-floor">{{ flat.floor }} этаж</span>
      <span class="flat-card__head-rooms-square"
        >{{ flat.rooms }} {{ getRoomsNum(flat.rooms) }}
        <span class="flat-card__head-rooms-square-separator">-</span>
        {{ flat.square }}м<sup>2</sup></span
      >
    </div>
    <div class="flat-card__pic">
      <span v-if="flat.number" class="flat-card__pic-number"
        >№{{ flat.number }}</span
      >
      <img
        :src="flat.plan || ''"
        :alt="flat.building_name || ''"
        class="flat-card__pic-image"
      />
    </div>
    <div class="flat-card__footer">
      <p
        v-if="flat.price_real || flat.price_real === 0"
        class="flat-card__footer-pricing"
      >
        {{ flat.price_real.toLocaleString("ru-RU") }}р.
      </p>
      <p class="flat-card__footer-price-per-meter">
        {{ getPricePerMeter().toLocaleString("ru-RU") }} р. за м<sup>2</sup>
      </p>
    </div>
    <button class="flat-card__btn">ПОДРОБНЕЕ</button>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class FlatCard extends Vue {
  @Prop() flat: any;

  getPricePerMeter() {
    if (this.flat) {
      return (Number(this.flat.price_real) / Number(this.flat.square)).toFixed(
        2
      );
    }
    return "";
  }

  getRoomsNum(n: any) {
    const text_forms: any = ["комната", "комнаты", "комнат"];
    n = Math.abs(n) % 100;
    let n1 = n % 10;
    if (n > 10 && n < 20) {
      return text_forms[2];
    }
    if (n1 > 1 && n1 < 5) {
      return text_forms[1];
    }
    if (n1 == 1) {
      return text_forms[0];
    }
    return text_forms[2];
  }
}
</script>
<style>
.flat-card {
  box-shadow: 0px 5px 20px rgba(86, 86, 86, 0.05);
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  padding: 8px 10px 10px 10px;
  min-height: 100%;
  position: relative;
}
.flat-card__head {
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}
.flat-card__head-floor {
  color: #2c323a;
  opacity: 0.5;
  font-size: 12px;
  line-height: 28px;
  font-weight: 900;
}
.flat-card__head-rooms-square {
  color: #2c323a;
  font-size: 12px;
  line-height: 28px;
  font-weight: 900;
}
.flat-card__head-rooms-square-separator {
  opacity: 0.5;
  margin-left: 5px;
  margin-right: 5px;
}
.flat-card__pic {
  position: relative;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 11px;
  height: 0;
  padding-bottom: 100%;
  transition: 0.3s;
}
.flat-card__pic-number {
  position: absolute;
  z-index: 1;
  right: -1px;
  top: -1px;
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #fff;
  color: #2c323a;
  font-size: 14px;
  line-height: 28px;
  border-radius: 0px 5px;
  border: 1px solid #ebebeb;
}
.flat-card__pic-image {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: calc(100% - 20px);
  max-height: calc(100% - 20px);
  transition: 0.3s;
}
.flat-card__footer-pricing {
  text-align: right;
  font-size: 20px;
  line-height: 28px;
  color: #2c323a;
  font-weight: 900;
}
.flat-card__footer-price-per-meter {
  text-align: right;
  color: #2c323a;
  font-size: 12px;
  line-height: 28px;
  font-weight: 900;
  opacity: 0.5;
}
.flat-card__btn {
  position: absolute;
  bottom: -60px;
  left: 10px;
  width: calc(100% - 20px);
  text-align: center;
  border-radius: 5px;
  line-height: 38px;
  font-weight: 900;
  height: 40px;
  background-color: #70d24e;
  color: #fff;
  font-size: 14px;
  border: none;
}
@media screen and (min-width: 992px) {
  .flat-card:hover .flat-card__btn {
    bottom: 10px;
  }
  .flat-card:hover .flat-card__pic {
    padding-bottom: 80%;
  }
  .flat-card__btn:hover {
    background-color: #67bf49;
  }
}
</style>
