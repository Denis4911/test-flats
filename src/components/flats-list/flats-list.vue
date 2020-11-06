<template>
  <div class="flats-list">
    <div class="flats-list__filter">
      <div class="flats-list__filter-item">
        <p class="flats-list__filter-item-title">КОМНАТЫ</p>
        <ul class="flats-list__filter-item-selectors-group">
          <li
            v-for="item in roomTypes"
            :key="item.id"
            class="flats-list__filter-item-selectors-group-item"
          >
            <button
              v-if="item.label"
              class="flats-list__filter-item-selectors-group-item-btn"
              :class="{
                'flats-list__filter-item-selectors-group-item-btn_active':
                  filterData.rooms === item.value
              }"
              @click="filterData.rooms = item.value"
            >
              {{ item.label }}
            </button>
          </li>
        </ul>
      </div>
      <div class="flats-list__filter-item">
        <p class="flats-list__filter-item-title">ЭТАЖ</p>
        <div class="flats-list__filter-item-inputs-group">
          <div class="flats-list__filter-item-inputs-group-top">
            <input
              v-model="filterData.floor[0]"
              type="number"
              class="flats-list__filter-item-inputs-group-top-input"
            />
            <input
              v-model="filterData.floor[1]"
              type="number"
              class="flats-list__filter-item-inputs-group-top-input"
            />
          </div>
          <vue-range-slider :min="minmax.floor[0]" :max="minmax.floor[1]" ref="slider" v-model="filterData.floor"></vue-range-slider>
        </div>
      </div>
      <div class="flats-list__filter-item">
        <p class="flats-list__filter-item-title">ПЛОЩАДЬ, м<sup>2</sup></p>
        <div class="flats-list__filter-item-inputs-group">
          <div class="flats-list__filter-item-inputs-group-top">
            <input
              v-model="filterData.square[0]"
              type="number"
              class="flats-list__filter-item-inputs-group-top-input"
            />
            <input
              v-model="filterData.square[1]"
              type="number"
              class="flats-list__filter-item-inputs-group-top-input"
            />
          </div>
          <vue-range-slider :min="minmax.square[0]" :max="minmax.square[1]" ref="slider" v-model="filterData.square"></vue-range-slider>
        </div>
      </div>
      <div class="flats-list__filter-item">
        <p class="flats-list__filter-item-title">СТОИМОСТЬ, млн. р.</p>
        <div class="flats-list__filter-item-inputs-group">
          <div class="flats-list__filter-item-inputs-group-top">
            <input
              v-model="filterData.price[0]"
              type="number"
              class="flats-list__filter-item-inputs-group-top-input"
            />
            <input
              v-model="filterData.price[1]"
              type="number"
              class="flats-list__filter-item-inputs-group-top-input"
            />
          </div>
          <vue-range-slider :min="minmax.price[0]" :max="minmax.price[1]" ref="slider" v-model="filterData.price"></vue-range-slider>
        </div>
      </div>
      <div class="flats-list__filter-item">
        <button class="flats-list__filter-item-accept" @click="submit">
          Применить
        </button>
        <button class="flats-list__filter-item-cleaner" @click="cleanFilters">
          сбросить фильтр
        </button>
      </div>
    </div>
    <ul class="flats-list__items">
      <li
        v-for="(flat, key) in flatsShown"
        :key="key"
        class="flats-list__items-elem"
      >
        <FlatCard :flat="flat" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts" src="./flats-list.ts"></script>
<style src="./flats-list.css"></style>
