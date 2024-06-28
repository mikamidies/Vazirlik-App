<template>
  <div class="master">
    <SiteTop :title="title" />
    <div class="container">
      <LinksHeader />
      <div class="tabler">
        <table>
          <tr>
            <th>{{ $store.state.translations["app_num"] }}</th>
            <th>{{ $store.state.translations["polozheniye"] }}</th>
            <th>{{ $store.state.translations["send_date"] }}</th>
            <th>{{ $store.state.translations["end_date"] }}</th>
            <th>{{ $store.state.translations["registry_num"] }}</th>
            <th>{{ $store.state.translations["event"] }}</th>
          </tr>
          <tr v-for="item in applications" :key="item.id">
            <td>
              <p class="strong">{{ item.id }}</p>
            </td>
            <td>
              <p v-show="item.status == `in_process`" class="status waiting">
                {{ $store.state.translations["waiting"] }}
              </p>
              <p v-show="item.status == `accepted`" class="status active">
                {{ $store.state.translations["accepted"] }}
              </p>
              <a-popover title="Rad etish sabablari">
                <template slot="content">
                  <p v-for="(reason, index) in item?.reject_reasons">
                    {{ index + 1 }}.{{ reason?.name?.uz }}
                  </p>
                </template>
                <p v-show="item.status == `rejected`" class="status passive">
                  {{ $store.state.translations["rejected"] }}
                </p>
              </a-popover>

              <p v-show="item.status == `new`" class="status new">
                {{ $store.state.translations["new"] }}
              </p>
            </td>
            <td>
              <p class="weak">
                {{ moment(item.created_at).format("YYYY-MM-DD HH:mm:ss") }}
              </p>
            </td>
            <td>
              <p class="weak">{{ item.closed_at }}</p>
            </td>
            <td>
              <p class="strong">{{ item?.formatted_register_number || "—" }}</p>
            </td>
            <td>
              <div class="button">
                <a :href="item?.certificate?.link" v-show="item?.status == `accepted`">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6 8L8 10M8 10L10 8M8 10L8 2"
                      stroke="#00A7AE"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 6V6C3.34315 6 2 7.34315 2 9L2 11C2 12.6569 3.34315 14 5 14L11 14C12.6569 14 14 12.6569 14 11L14 9C14 7.34315 12.6569 6 11 6V6"
                      stroke="#00A7AE"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <PaginationElement @getData="getApps" :totalPage="totalPage" />

      <!-- <div class="link">
        <NuxtLink to="/applications/new">
          {{ $store.state.translations["new_app"] }}
        </NuxtLink>
      </div> -->
    </div>
  </div>
</template>

<script>
import applicationApi from "@/api/application";
import moment from "moment";
export default {
  data() {
    return {
      applications: "",
      title: this.$store.state.translations["applications"],
      totalPage: 1,
    };
  },

  async mounted() {
    if (localStorage.getItem("authToken")) {
      this.getApps();
    } else {
      this.$router.push(this.localePath("/auth"));
    }
  },

  methods: {
    moment,
    async getApps() {
      try {
        const applications = await applicationApi.getApplications(this.$axios, {
          params: { page: 1, ...this.$route.query },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });

        this.applications = applications.data;
        this.totalPage = applications.total;
      } catch (e) {
        this.$router.push(this.localePath("/"));
      }
    },
  },
};
</script>

<style scoped>
@import url(@/assets/css/table.css);
.container {
  padding: 40px 44px 112px 44px;
}
.status {
  max-width: max-content !important;
}
.button {
  display: flex;
  align-items: center;
  justify-content: center;
}
.link {
  display: flex;
  justify-content: center;
  padding: 58px 0 0 0;
}
.link a {
  padding: 18px 50px;
  border-radius: 16px;
  border: 1px solid var(--Agro-Blue, #3c4bdc);
  color: var(--Agro-Blue, #3c4bdc);
  font-family: var(--semi);
  font-size: var(--14);
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  transition: 0.4s;
  display: inline-flex;
}
.link a:hover {
  background: #3c4bdc;
  color: white;
}
@media screen and (max-width: 1024px) {
  .container {
    padding: 40px 16px;
    overflow: hidden;
  }
  .link {
    padding-top: 40px;
  }
  .link a {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
