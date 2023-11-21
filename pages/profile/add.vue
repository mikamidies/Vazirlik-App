<template>
  <div class="master">
    <SiteTop :title="title" />
    <div class="container">
      <div class="cardo">
        <a-form-model
          class="w-full"
          :model="form"
          ref="ruleForm"
          :rules="rules"
        >
          <div class="items">
            <div class="item">
              <a-form-model-item prop="name" class="form-item w-full mb-0">
                <p class="sup">
                  {{ $store.state.translations["hostel_name"] }}
                </p>
                <input
                  type="text"
                  v-model="form.name"
                  :placeholder="$store.state.translations[`hostel_name`]"
                />
              </a-form-model-item>
            </div>
            <div class="item">
              <a-form-model-item
                prop="phone_number"
                class="form-item w-full mb-0"
              >
                <p class="sup">
                  {{ $store.state.translations["phone_num"] }}
                </p>
                <input
                  type="text"
                  v-mask="'+998 ## ### ## ##'"
                  v-model="form.phone_number"
                  placeholder="+998"
                />
              </a-form-model-item>
            </div>
            <div class="item">
              <a-form-model-item prop="website" class="form-item w-full mb-0">
                <p class="sup">
                  {{ $store.state.translations["website"] }}
                </p>
                <input
                  v-model="form.website"
                  type="text"
                  :placeholder="$store.state.translations[`website`]"
                />
              </a-form-model-item>
            </div>
            <div class="item">
              <a-form-model-item
                prop="phone_number1"
                class="form-item w-full mb-0"
              >
                <p class="sup">
                  {{ $store.state.translations["add_number"] }}
                </p>
                <input
                  type="text"
                  v-mask="'+998 ## ### ## ##'"
                  v-model="form.phone_number1"
                  placeholder="+998"
                />
              </a-form-model-item>
            </div>
            <div class="item">
              <a-form-model-item prop="region_id" class="form-item w-full mb-0">
                <p class="sup">
                  {{ $store.state.translations["hostel_region"] }}
                </p>
                <a-select
                  v-model="form.region_id"
                  :placeholder="$store.state.translations[`hostel_owner`]"
                >
                  <a-select-option
                    v-for="region in regions"
                    :value="region?.id"
                    :key="region?.id"
                  >
                    {{ region?.name }}
                  </a-select-option>
                </a-select>
              </a-form-model-item>
            </div>
            <div class="item">
              <a-form-model-item prop="email" class="form-item w-full mb-0">
                <p class="sup">
                  {{ $store.state.translations["hostel_address"] }}
                </p>
                <input
                  v-model="form.email"
                  type="email"
                  :placeholder="$store.state.translations[`hostel_address`]"
                />
              </a-form-model-item>
            </div>
            <div class="item">
              <a-form-model-item prop="tin" class="form-item w-full mb-0">
                <p class="sup">{{ $store.state.translations["stir_num"] }}</p>
                <input
                  type="text"
                  v-model="form.tin"
                  :placeholder="$store.state.translations[`stir_num`]"
                />
              </a-form-model-item>
            </div>
            <div class="item">
              <a-form-model-item
                prop="legal_name"
                class="form-item w-full mb-0"
              >
                <p class="sup">{{ $store.state.translations["legal_name"] }}</p>
                <input
                  type="text"
                  v-model="form.legal_name"
                  :placeholder="$store.state.translations[`legal_name`]"
                />
              </a-form-model-item>
            </div>
            <div class="item">
              <a-form-model-item prop="address" class="form-item w-full mb-0">
                <p class="sup">
                  {{ $store.state.translations["hostel_address"] }}
                </p>
                <input
                  type="text"
                  v-model="form.address"
                  :placeholder="$store.state.translations[`hostel_address`]"
                />
              </a-form-model-item>
            </div>
            <div class="item">
              <a-form-model-item
                prop="director_name"
                class="form-item w-full mb-0"
              >
                <p class="sup">
                  {{ $store.state.translations["hostel_owner"] }}
                </p>
                <input
                  type="text"
                  v-model="form.director_name"
                  :placeholder="$store.state.translations[`hostel_owner`]"
                />
              </a-form-model-item>
            </div>
          </div>
          <div class="drag">
            <a-form-item>
              <div class="dropbox">
                <ClientOnly fallback-tag="span" fallback="Loading comments...">
                  <a-upload-dragger
                    :class="{ uploadDis: fileList.length > 0 }"
                    :headers="headers"
                    v-decorator="['dragger']"
                    name="file"
                    action="https://api.hotels.ndc.uz/api/files"
                    @change="handleChange"
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
                      {{ $store.state.translations["photo_logo"] }}
                    </p>
                  </a-upload-dragger>
                </ClientOnly>
              </div>
            </a-form-item>
          </div>
          <div class="buttons">
            <button type="submit" class="cancel">
              {{ $store.state.translations["cancel"] }}
            </button>
            <button type="button" class="confirm" @click="sumbit">
              {{ $store.state.translations["save"] }}
            </button>
          </div>
        </a-form-model>
      </div>
    </div>
  </div>
</template>

<script>
import hotelsApi from "@/api/hotels";
import regionsApi from "@/api/regions";
export default {
  data() {
    return {
      headers: {},
      title: "Mehmon uyi qo‘shish",
      rules: {
        name: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
        website: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
        email: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
        region_id: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
        legal_name: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
        tin: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
        director_surname: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
        director_name: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
        director_fathers_name: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
        address: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
        phone_number: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
      },
      form: {
        name: "",
        phone_number: "",
        phone_number1: "",
        website: "",
        email: "",
        region_id: undefined,
        legal_name: "",
        tin: "",
        director_surname: "",
        director_name: "",
        director_fathers_name: "",
        address: "",
        img: "",
      },
      fileList: [],
    };
  },
  async asyncData({ $axios }) {
    const regionsData = await regionsApi.getRegions($axios, {
      params: {},
    });
    const regions = regionsData;
    return {
      regions,
    };
  },
  mounted() {
    this.headers.authorization = `Bearer ${localStorage.getItem("authToken")}`;
  },
  methods: {
    sumbit() {
      const data = {
        ...this.form,
        director_surname: this.form.director_name,
        director_fathers_name: this.form.director_name,
      };
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.__POST_HOTEL(data);
        }
      });
    },
    async __POST_HOTEL(formData) {
      try {
        const hotel = await hotelsApi.postHotels(this.$axios, {
          data: formData,
          params: {
            params: {},
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          },
        });
        this.$notification["success"]({
          message: "Success",
          description: "Успешно добавлен",
        });
        this.$router.go(-1);
      } catch (e) {
        this.$notification["error"]({
          message: "Error",
          description: e.response.statusText,
        });
      }
    },
    handleChange(info) {
      this.fileList = info.fileList;
      if (info?.fileList[0]?.response)
        this.form.img = info?.fileList[0]?.response;
    },
  },
};
</script>

<style scoped>
.uploadDis :deep(.ant-upload.ant-upload-drag){
  pointer-events: none !important;
  opacity: .5 !important;
}
.disabled {
  pointer-events: none;
}
.container {
  padding: 40px 0 112px 0;
}
.cardo {
  border-radius: 16px;
  background: var(--Apple-Grey, #f5f5f7);
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px;
}
.cardo form {
  max-width: 953px;
  margin: 0 auto;
}
.items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 24px;
  row-gap: 48px;
}
.sup {
  color: var(--grey-80, #353437);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  margin-bottom: 16px;
}
.item input {
  border-radius: 16px;
  border: 1px solid #e1e3f5;
  background: var(--White, #fff);
  width: 100%;
  padding: 20px 24px;
  color: black;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.item input::placeholder {
  color: #5d5d5f;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
form :deep(.ant-select-selection) {
  border-radius: 16px;
  border: 1px solid #e1e3f5;
  background: var(--White, #fff);
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
form
  :deep(
    .ant-select-selection__placeholder,
    .ant-select-search__field__placeholder
  ) {
  color: #5d5d5f;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  right: 0;
  margin: 0;
  height: 100%;
  transform: translateY(-50%);
}
form :deep(.ant-select-selection__rendered) {
  margin: 0;
  margin-left: 24px;
}

form :deep(.ant-select-selection-selected-value) {
  color: var(--Black, #020105);
  font-family: var(--medium);
  color: #5d5d5f;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

.ant-form-item {
  margin-bottom: 0;
}
.drag :deep(.ant-upload.ant-upload-drag) {
  border-radius: 16px;
  border: 1px solid #e1e3f5;
  background: var(--White, #fff);
  height: 208px;
}
.drag :deep(.ant-upload.ant-upload-drag p.ant-upload-drag-icon) {
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
}
.drag :deep(.ant-upload.ant-upload-drag p.ant-upload-text) {
  color: var(--Black, #020105);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
}
.drag :deep(.ant-upload.ant-upload-drag p.ant-upload-drag-icon span) {
  background: #eff0f9;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.drag {
  margin-top: 48px;
}
.buttons {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
}
.cancel {
  color: var(--Agro-Blue, #3c4bdc);
  font-family: var(--semi);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  padding: 18px 50px;
  border-radius: 16px;
  border: 1px solid var(--Agro-Blue, #3c4bdc);
  background: var(--White, #fff);
  cursor: pointer;
}
.confirm {
  color: var(--White, #fff);
  font-family: var(--semi);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  padding: 18px 50px;
  border-radius: 16px;
  background: var(--Agro-blue, #3c4bdc);
  border: 1px solid #3c4bdc;
  cursor: pointer;
}
@media screen and (max-width: 1024px) {
  .items {
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
  .cardo {
    padding: 16px 16px 40px 16px;
  }
  .sup {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 8px;
  }
  .item input {
    padding: 12px 24px;
    border-radius: 10px;
  }
  form :deep(.ant-select-selection) {
    height: 50px;
  }
  .drag {
    margin-top: 24px;
  }
  .buttons {
    margin-top: 24px;
    flex-direction: column;
    gap: 16px;
  }
  .cancel,
  .confirm {
    width: 100%;
  }
}
</style>
