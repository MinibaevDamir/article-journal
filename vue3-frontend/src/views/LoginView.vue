<template>
  <v-card rounded="xl" class="login-card">
    <div class="login-card-title">Login to Blog Portail</div>
    <v-form ref="login-card-form" lazy-validation>
      <v-text-field
        label="E-mail"
        required
        variant="solo"
        class="input-field"
        v-model="formData.email"
        :error-messages="emailErrors"
      />
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
          Sign In
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script lang="ts" setup>
import { reactive, computed } from "vue";
import { required, email } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import type { UserLoginData } from "@/types/User";
import { getErrorArray } from "@/utility/helpers";

const formData = reactive<UserLoginData>({
  password: "",
  email: "",
});
const rules = {
  email: { required, email },
  password: { required },
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
.login-card {
  margin: auto auto;
  padding: 24px 20px;
  &-title {
    text-align: center;
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 32px;
  }
  .input-field {
    margin-bottom: 12px;
    width: 320px;
  }
  .sign-button {
    box-shadow: 0 1px 4px rgb(185 185 185);
    text-transform: none;
  }
}
</style>
