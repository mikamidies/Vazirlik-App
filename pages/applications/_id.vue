<template>
  <div class="master">
    <SiteTop :title="title" />
    <div class="container">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <p class="sup">{{ $store.state.translations["app_type"] }}</p>

          <a-select
            v-model="application_type_id"
            :placeholder="$store.state.translations[`value`]"
          >
            <a-select-option
              v-for="option in appTypes.data"
              :key="option.id"
              :value="option.id"
            >
              {{ option.name }}
            </a-select-option>
          </a-select>
        </div>
        <div class="grid">
          <a-form-item>
            <div
              class="dropbox"
              :class="{
                disable: fileList.state_certificate.length > 0,
                error: error == true,
              }"
            >
              <a-upload-dragger
                @change="($event) => handleChange($event, 'state_certificate')"
                :file-list="fileList.state_certificate"
                accept=".doc, .docx, .pdf"
                name="file"
                action="https://api.hotels.ndc.uz/api/files"
                :headers="headers"
              >
                <p class="ant-upload-drag-icon">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        d="M29.3337 25.3333V21.3333C29.3337 19.1242 27.5428 17.3333 25.3337 17.3333H24.0003C23.161 17.3333 22.3706 17.7285 21.867 18.4L20.267 20.5333C19.2598 21.8763 17.679 22.6666 16.0003 22.6666C14.3216 22.6666 12.7409 21.8763 11.7337 20.5333L10.1337 18.4C9.63005 17.7285 8.83968 17.3333 8.00033 17.3333H6.66699C4.45785 17.3333 2.66699 19.1242 2.66699 21.3333V25.3333C2.66699 27.5425 4.45785 29.3333 6.66699 29.3333H25.3337C27.5428 29.3333 29.3337 27.5425 29.3337 25.3333Z"
                        fill="#3C4BDC"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.66634 17.3334H7.99967C8.83903 17.3334 9.6294 17.7285 10.133 18.4L11.733 20.5334C12.7402 21.8763 14.321 22.6667 15.9997 22.6667C17.6784 22.6667 19.2591 21.8763 20.2663 20.5334L21.8663 18.4C22.37 17.7285 23.1603 17.3334 23.9997 17.3334H25.333C25.8005 17.3334 26.2493 17.4136 26.6663 17.561V8.00002C26.6663 5.0545 24.2785 2.66669 21.333 2.66669H10.6663C7.72082 2.66669 5.33301 5.0545 5.33301 8.00002V17.561C5.75005 17.4136 6.19883 17.3334 6.66634 17.3334ZM16.9997 8.00002C16.9997 7.44774 16.552 7.00002 15.9997 7.00002C15.4474 7.00002 14.9997 7.44774 14.9997 8.00002V11H11.9997C11.4474 11 10.9997 11.4477 10.9997 12C10.9997 12.5523 11.4474 13 11.9997 13H14.9997V16C14.9997 16.5523 15.4474 17 15.9997 17C16.552 17 16.9997 16.5523 16.9997 16V13H19.9997C20.552 13 20.9997 12.5523 20.9997 12C20.9997 11.4477 20.552 11 19.9997 11H16.9997V8.00002Z"
                        fill="#3C4BDC"
                      />
                    </svg>
                  </span>
                </p>
                <p class="ant-upload-text">
                  {{ $store.state.translations["state_certificate"] }}
                </p>
              </a-upload-dragger>
            </div>
          </a-form-item>
          <a-form-item>
            <div
              class="dropbox"
              :class="{
                disable: fileList.cadastre.length > 0,
              }"
            >
              <a-upload-dragger
                @change="($event) => handleChange($event, 'cadastre')"
                :file-list="fileList.cadastre"
                accept=".doc, .docx, .pdf"
                name="file"
                action="https://api.hotels.ndc.uz/api/files"
                :headers="headers"
              >
                <p class="ant-upload-drag-icon">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        d="M29.3337 25.3333V21.3333C29.3337 19.1242 27.5428 17.3333 25.3337 17.3333H24.0003C23.161 17.3333 22.3706 17.7285 21.867 18.4L20.267 20.5333C19.2598 21.8763 17.679 22.6666 16.0003 22.6666C14.3216 22.6666 12.7409 21.8763 11.7337 20.5333L10.1337 18.4C9.63005 17.7285 8.83968 17.3333 8.00033 17.3333H6.66699C4.45785 17.3333 2.66699 19.1242 2.66699 21.3333V25.3333C2.66699 27.5425 4.45785 29.3333 6.66699 29.3333H25.3337C27.5428 29.3333 29.3337 27.5425 29.3337 25.3333Z"
                        fill="#3C4BDC"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.66634 17.3334H7.99967C8.83903 17.3334 9.6294 17.7285 10.133 18.4L11.733 20.5334C12.7402 21.8763 14.321 22.6667 15.9997 22.6667C17.6784 22.6667 19.2591 21.8763 20.2663 20.5334L21.8663 18.4C22.37 17.7285 23.1603 17.3334 23.9997 17.3334H25.333C25.8005 17.3334 26.2493 17.4136 26.6663 17.561V8.00002C26.6663 5.0545 24.2785 2.66669 21.333 2.66669H10.6663C7.72082 2.66669 5.33301 5.0545 5.33301 8.00002V17.561C5.75005 17.4136 6.19883 17.3334 6.66634 17.3334ZM16.9997 8.00002C16.9997 7.44774 16.552 7.00002 15.9997 7.00002C15.4474 7.00002 14.9997 7.44774 14.9997 8.00002V11H11.9997C11.4474 11 10.9997 11.4477 10.9997 12C10.9997 12.5523 11.4474 13 11.9997 13H14.9997V16C14.9997 16.5523 15.4474 17 15.9997 17C16.552 17 16.9997 16.5523 16.9997 16V13H19.9997C20.552 13 20.9997 12.5523 20.9997 12C20.9997 11.4477 20.552 11 19.9997 11H16.9997V8.00002Z"
                        fill="#3C4BDC"
                      />
                    </svg>
                  </span>
                </p>
                <p class="ant-upload-text">
                  {{ $store.state.translations["cadastre"] }}
                </p>
              </a-upload-dragger>
            </div>
          </a-form-item>
        </div>
        <div class="link">
          <button type="submit">
            {{ $store.state.translations["send_it"] }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import applicationApi from "@/api/application.js";

export default {
  data() {
    return {
      title: this.$store.state.translations["new_app"],
      fileList: {
        fire_safety: [],
        sanitation: [],
        certificate: [],
        state_certificate: [],
        cadastre: [],
      },
      fileTypes: {
        fire_safety: "",
        sanitation: "",
        certificate: "",
        state_certificate: "",
        cadastre: "",
      },
      headers: {},
      error: false,
      appTypes: [],
      application_type_id: "",
    };
  },

  async mounted() {
    const appTypes = await applicationApi.getTypes(this.$axios);

    this.appTypes = appTypes;
    this.application_type_id = appTypes?.data[0]?.id;

    if (!localStorage.getItem("authToken")) this.$router.push(this.localePath("/auth"));

    this.headers.authorization = `Bearer ${localStorage.getItem("authToken")}`;
  },

  methods: {
    handleChange(info, name) {
      this.fileList[name] = info.fileList;
      if (info?.fileList[0]?.response) {
        this.fileTypes[name] = info?.fileList[0]?.response;
      }
    },

    async onSubmit() {
      const formData = {
        application_type_id: this.application_type_id,
        hotel_id: this.$route.params.id,
        fire_safety: this.fileTypes.fire_safety,
        sanitation: this.fileTypes.sanitation,
        certificate: this.fileTypes.certificate,
        state_certificate: this.fileTypes.state_certificate,
        cadastre: this.fileTypes.cadastre,
      };

      if (this.fileList.state_certificate.length > 0) {
        try {
          const res = await applicationApi.sendApplication({
            data: formData,
            params: {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
              },
            },
          });
          this.$notification["success"]({
            message: this.$store.state.translations["send_app1"],
          });
          this.$router.push(this.localePath("/applications"));
        } catch (e) {
          this.error = true;
          this.$notification["error"]({
            message: this.$store.state.translations["old_app"],
          });
        }
      } else {
        this.error = true;
        this.$notification["error"]({
          message: this.$store.state.translations["all_files"],
        });
      }

      // this.application_type_id = "";
      this.fileTypes.fire_safety = "";
      this.fileTypes.sanitation = "";
      this.fileTypes.certificate = "";
      this.fileTypes.state_certificate = "";
      this.fileTypes.cadastre = "";
    },
  },
};
</script>

<style scoped>
.container {
  padding: 80px 0 112px 0;
}
form {
  max-width: 1196px;
  margin: 0 auto;
}
.link {
  display: flex;
  justify-content: center;
  padding: 40px 0 0 0;
}
.link button {
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
  background: transparent;
}
.link button:hover {
  background: #3c4bdc;
  color: white;
}
.sup {
  color: var(--grey-80, #353437);
  font-size: var(--18);
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  margin-bottom: 8px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 40px 0 0 0;
}
.ant-form-item {
  margin-bottom: 0;
}
.grid :deep(.ant-upload.ant-upload-drag) {
  border-radius: 16px;
  border: 1px solid #e1e3f5;
  background: #f7f8fc;
  height: 208px;
}
.grid :deep(.ant-upload.ant-upload-drag p.ant-upload-drag-icon) {
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
}
.grid :deep(.ant-upload.ant-upload-drag p.ant-upload-text) {
  color: var(--Black, #020105);
  font-family: var(--medium);
  font-size: var(--16);
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
}
.grid :deep(.ant-upload.ant-upload-drag p.ant-upload-drag-icon span) {
  background: #eff0f9;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
form :deep(.ant-select-selection) {
  border-radius: 16px;
  background: var(--Apple-Grey, #f5f5f7);
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 24px;
}
form :deep(.ant-select-selection__placeholder, .ant-select-search__field__placeholder) {
  color: var(--Black, #020105);
  font-family: var(--medium);
  font-size: var(--18);
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  right: 0;
  margin: 0;
  height: 100%;
  transform: translateY(-50%);
  display: flex !important;
}
form :deep(.ant-select-selection-selected-value) {
  color: var(--Black, #020105);
  font-family: var(--medium);
  font-size: var(--18);
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  background: #f5f5f7;
  position: relative;
  z-index: 999;
}
form :deep(.dropbox.disable .ant-upload.ant-upload-drag) {
  pointer-events: none;
  opacity: 0.5;
  border-color: #e1e3f5 !important;
}
form :deep(.dropbox.error .ant-upload.ant-upload-drag) {
  border-color: red;
}
form :deep(.ant-upload-list-item-card-actions) {
  opacity: 1;
}
form :deep(.ant-upload-list-item-card-actions svg path) {
  color: red !important;
}
@media screen and (max-width: 1024px) {
  .container {
    padding: 40px 16px;
  }
  form :deep(.ant-select-selection) {
    height: 50px;
    border-radius: 10px;
  }
  form :deep(.ant-select-selection__rendered) {
    margin: 0 24px 0 0 !important;
    display: flex;
    align-items: center;
  }
  form :deep(.ant-select-selection-selected-value),
  form :deep(.ant-select-selection__placeholder, .ant-select-search__field__placeholder) {
    font-size: var(--16);
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 8px;
    padding-top: 24px;
  }
  .link {
    padding-top: 24px;
  }
  .link a {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
