<template>
  <div class="wrapper">
    <div id="navigation">
      <div class="navigation-example" :style="bgImage">
        <div class="md-layout">
          <div class="md-layout-item">
            <md-toolbar class="md-rose">
              <div class="md-toolbar-row">
                <div class="md-toolbar-section-start">
                  <h3 class="md-title">Brand</h3>
                  <md-list>
                    <md-list-item href="#/">
                      <p>Link</p>
                    </md-list-item>

                    <md-list-item href="javascript:void(0)">
                      <p>Link</p>
                    </md-list-item>
                  </md-list>
                </div>
                <div class="md-toolbar-section-end">
                  <md-button
                    class="md-just-icon md-simple md-white md-toolbar-toggle"
                  >
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </md-button>

                  <div class="md-collapse">
                    <div class="md-autocomplete">
                      <md-autocomplete
                        class="search has-white"
                        v-model="selectedEmployee"
                        :md-options="employees"
                        :md-open-on-focus="false"
                      >
                        <label>Search...</label>
                      </md-autocomplete>
                    </div>
                  </div>
                </div>
              </div>
            </md-toolbar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedEmployee: "",
      employees: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone"
      ]
    };
  },
  props: {
    image: {
      type: String,
      //default: require("@/assets/img/bg.jpg")
    },
    img: {
      type: String,
      //default: require("@/assets/img/faces/avatar.jpg")
    }
  },
  computed: {
    bgImage() {
      return {
        //backgroundImage: `url(${this.image})`
      };
    }
  }
};
</script>

<style lang="css"></style>