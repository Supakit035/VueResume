<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h1>Resume For Education Work</h1>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-20 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="profile"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name text-center" >
                  <h3 class="title">{{profile_name}}</h3>
                  <h6>{{profile_job}}</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="profile-tabs text-center">
            <tabs
              :tab-name="['Education', 'Experience', 'Contract']"
              :tab-icon="['school', 'home', 'call_end']"
              plain
              nav-pills-icons
              color-button="warning"
            >
              <template slot="tab-pane-1">
                <timeline></timeline>
              </template>
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .profile-tabs /deep/ {
    .md-card-tabs .md-list {
      justify-content: center;
    }

    [class*="tab-pane-"] {
      margin-top: 3.213rem;
      padding-bottom: 50px;

      img {
        margin-bottom: 2.142rem;
      }
    }
  }

</style>


<script>
  import Navigation from './Navigation'
  import Tabs from '../component/Tabs.vue'
  import Timeline from '../components/Timeline.vue'

  export default {
    components: {
      Navigation,
      Tabs,
      Timeline
    },
    props: {
      image: {
        type: String,
        default: require("../assets/img/bg-edu.jpg")
      },
      profile: {
        type: String,
        default: 'https://scontent.fbkk23-1.fna.fbcdn.net/v/t1.0-9/53647245_2083641425025089_7425524432128442368_n.jpg?_nc_cat=104&_nc_ht=scontent.fbkk23-1.fna&oh=aacddfc8df2eaacd8e3a3c2bf937a543&oe=5D63FC6E'
      },
    },
    data() {
      return {
        profile_name: "Supakit Anupong",
        profile_job: "Front-End and Back-End Developer, Android Developer, and Software Engineer",
        timeline_data: [
          {
            "school":"Ateneo de Davao University",
            "address":"Roxas Ave, Poblacion District, Davao City",
            "course":"BS in Information Technology",
            "yearStart":"2009",
            "yearEnd":"2014"
          }
        ]
      }
    },
    computed: {
      headerStyle() {
        return {
          backgroundImage: `url(${this.image})`
        };
      },
    },
  }

</script>
