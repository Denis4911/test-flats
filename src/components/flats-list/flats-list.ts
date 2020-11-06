import { Vue, Component, Prop } from "vue-property-decorator";
import FlatCard from "@/components/flat-card/flat-card.vue";
import "vue-range-component/dist/vue-range-slider.css";
import VueRangeSlider from "vue-range-component";

@Component({
  components: {
    FlatCard,
    VueRangeSlider
  }
})
export default class FlatsList extends Vue {
  sliderValue: any = 50;
  @Prop() flats: any;
  roomTypes: any = [
    {
      id: 1,
      label: "S",
      value: "s"
    },
    {
      id: 2,
      label: "1к",
      value: 1
    },
    {
      id: 3,
      label: "2к",
      value: 2
    },
    {
      id: 4,
      label: "3к",
      value: 3
    }
  ];

  filterData: any = {
    rooms: null,
    floor: [2000, null],
    square: [2000, null],
    price: [2000, null]
  };

  flatsShown: any = [];

  beforeMount(): void {
    this.setFiltersToMinAndMaxValues();
    this.minmax = JSON.parse(JSON.stringify(this.filterData));
  }

  setFiltersToMinAndMaxValues() {
    this.flatsShown = this.flats;
    if (this.flats && this.flats.length) {
      this.flats.forEach((flat: any) => {
        if (flat.floor && Number(flat.floor) < this.filterData.floor[0]) {
          this.filterData.floor[0] = Number(flat.floor);
        }
        if (flat.floor && Number(flat.floor) > this.filterData.floor[1]) {
          this.filterData.floor[1] = Number(flat.floor);
        }
        if (flat.square && Number(flat.square) < this.filterData.square[0]) {
          this.filterData.square[0] = Number(flat.square);
        }
        if (flat.square && Number(flat.square) > this.filterData.square[1]) {
          this.filterData.square[1] = Number(flat.square);
        }
        if (
          flat.price_real &&
          Math.floor(Number(flat.price_real) / 1000000) <
            this.filterData.price[0]
        ) {
          this.filterData.price[0] = Math.floor(
            Number(flat.price_real) / 1000000
          );
        }
        if (
          flat.price_real &&
          Math.ceil(Number(flat.price_real) / 1000000) >
            this.filterData.price[1]
        ) {
          this.filterData.price[1] = Math.ceil(
            Number(flat.price_real) / 1000000
          );
        }
      });
    }
  }

  minmax: any = null;

  cleanFilters() {
    this.setFiltersToMinAndMaxValues();
    this.filterData.rooms = null;
  }

  submit() {
    let flats: any = this.flats;
    if (this.filterData.rooms === "s") {
      flats = flats.filter((flat: any) => {
        return Boolean(flat.is_studio);
      });
    } else if (this.filterData.rooms) {
      flats = flats.filter((flat: any) => {
        return Number(flat.rooms) === Number(this.filterData.rooms);
      });
    }
    if (this.filterData.floor[0]) {
      flats = flats.filter((flat: any) => {
        return Number(flat.floor) >= Number(this.filterData.floor[0]);
      });
    }
    if (this.filterData.floor[1]) {
      flats = flats.filter((flat: any) => {
        return Number(flat.floor) <= Number(this.filterData.floor[1]);
      });
    }
    if (this.filterData.square[0]) {
      flats = flats.filter((flat: any) => {
        return Number(flat.square) >= Number(this.filterData.square[0]);
      });
    }
    if (this.filterData.square[1]) {
      flats = flats.filter((flat: any) => {
        return Number(flat.square) <= Number(this.filterData.square[1]);
      });
    }
    if (this.filterData.price[0]) {
      flats = flats.filter((flat: any) => {
        return (
          Number(flat.price_real) >=
          Number(this.filterData.price[0]) * 1000000
        );
      });
    }
    if (this.filterData.price[1]) {
      flats = flats.filter((flat: any) => {
        return (
          Number(flat.price_real) <= Number(this.filterData.price[1]) * 1000000
        );
      });
    }

    this.flatsShown = flats;
  }
}
