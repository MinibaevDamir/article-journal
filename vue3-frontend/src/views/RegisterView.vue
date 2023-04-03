<template>
  <v-card rounded="xl" class="register-card">
    <div class="register-card-title">Register Form</div>
    <v-form ref="register-card-form" lazy-validation>
      <v-text-field
        label="Name"
        required
        variant="solo"
        class="input-field"
        v-model="formData.name"
      />
      <v-text-field
        label="Surname"
        required
        variant="solo"
        class="input-field"
        v-model="formData.surname"
      />
      <v-text-field
        label="E-mail"
        required
        variant="solo"
        class="input-field"
        v-model="formData.email"
        :error-messages="emailErrors"
      />
      <div class="file-wrapper">
        <v-file-input
          accept="image/*"
          label="Set your blog logo"
          prepend-icon="mdi-account-box-outline"
        ></v-file-input>
        <v-file-input
          accept="image/*"
          label="Upload your background"
          prepend-icon="mdi-image"
        ></v-file-input>
      </div>
      <v-text-field
        label="Password"
        required
        variant="solo"
        type="password"
        class="input-field"
        v-model="formData.password"
        :error-messages="passwordErrors"
      />
      <v-card-actions>
        <v-btn
          block
          variant="flat"
          class="sign-button"
          type="submit"
          @click.prevent="validate"
        >
          Register
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script lang="ts" setup>
import { reactive, computed } from "vue";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import type { UserData } from "@/types/User";
import { getErrorArray } from "@/utility/helpers";

const formData = reactive<UserData>({
  name: "",
  surname: "",
  blogDescription: "",
  background: null,
  logo: null,
  password: "",
  confirmPassword: "",
  email: "",
});
const rules = {
  name: { required },
  surname: { required },
  email: { required, email },
  password: { required, minLength: minLength(8) },
  confirmPassword: { required, sameAsPassword: sameAs("password") },
};

const v$ = useVuelidate(rules, formData);

const emailErrors: any = computed<Array<String>>(() =>
  getErrorArray(v$, "email")
);
const passwordErrors: any = computed<Array<String>>(() =>
  getErrorArray(v$, "password")
);

async function validate() {
  if (!(await v$.value.$validate())) return;
}
</script>
<style lang="scss" scoped>
.register-card {
  margin: auto auto;
  padding: 40px 32px;
  &-title {
    text-align: center;
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 36px;
  }
  .input-field,
  .file-wrapper {
    margin-bottom: 12px;
    width: 480px;
  }
  .sign-button {
    box-shadow: 0 1px 4px rgb(185 185 185);
    text-transform: none;
  }
}
</style>
