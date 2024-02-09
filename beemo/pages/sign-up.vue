<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
      <h1 class="text-xl mt-4">Sign up to Beemo</h1>
      <form @submit.prevent="handleSignup" class="mt-7 mx-4 px-4 rounded border-t">
        <div class="mt-4">
          <label v-show="invalid.name" for="name" class="block text-left text-red-500">Please enter your full name.</label>
          <div id="name" class="flex w-full">
            <div>
              <label for="first-name" class="block text-left text-gray-600">First name:</label>
              <input
                @blur="() => validNameRule(form.firstName)"
                type="text"
                id="first-name"
                v-model="form.firstName"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div class="ml-2">
              <label for="last-name" class="block text-left text-gray-600">Last name:</label>
              <input
              @blur="() => validNameRule(form.lastName)"
                type="text"
                id="last-name"
                v-model="form.lastName"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div class="mt-4">
          <label v-show="invalid.username" class="block text-left text-red-500">Please enter a valid username at least 8 letters long.</label>
          <label for="username" class="block text-left text-gray-600">Username:</label>
          <input
            @blur="validUsernameRule"
            type="text"
            id="username"
            v-model="form.username"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div class="mt-4">
          <label v-show="invalid.email" class="block text-left text-red-500">Please enter a valid email address.</label>
          <label for="email" class="block text-left text-gray-600">Email:</label>
          <input
            @blur="validEmailRule"
            type="text"
            id="email"
            v-model="form.email"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div class="mt-4">
          <label v-if="invalid.password" class="block text-left text-red-500">Your password is not strong enough.</label>
          <label for="password" class="block text-left text-gray-600">Password:</label>
          <input
            @blur="validPasswordRule"
            type="password"
            id="password"
            v-model="form.password"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div class="mt-4">
          <label v-if="invalid.matchPassword" class="block text-left text-red-500">The passwords do not match.</label>
          <label for="confirm-password" class="block text-left text-gray-600">Confirm Password:</label>
          <input
            @blur="matchingPasswordRule"
            type="password"
            id="confirm-password"
            v-model="form.confirmPassword"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>  

        <div class="mt-4 flex justify-start">
            <input id="confirm-tos-checkbox" v-model="invalid.unconfirmedTos" :true-value="false" :false-value="true" type="checkbox" class="mt-2 w-4 h-4 checkbox"/>
            <div class="ml-2 flex justify-start items-start text-left">
                <label class="text-gray-600">I have read and agree to the <span class="cursor-pointer text-blue-500 text-base mt-4">Beemo Terms and Conditions</span></label>
            </div>
        </div>
        <div class="flex justify-center mt-6">
          <button @click="handleSignup" :disabled="loading" type="submit" class="btn-secondary" :class="{'opacity-20 cursor-not-allowed': loading}">
            Sign Up
          </button>
        </div>
      </form>

      <div class="flex border-t justify-center items-center mt-4 mb-4">
        <NuxtLink to="/account-recovery" class="mt-4">
            <span class="cursor-pointer text-blue-500 text-base">Recover your existing account instead</span>
        </NuxtLink>
      </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/authentication';

const { registerUser } = useAuthStore();
const { loading,  failed } = storeToRefs(useAuthStore());
const success = ref(false);

const form = ref({
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const invalid = ref({
    name: false,
    username: false,
    password: false,
    matchPassword: false,
    email: false,
    unconfirmedTos: true
})

const checkInvalidFormValues = () => {
  return (Object.values(invalid.value).some(value => value == true)) || Object.values(form.value).some(value => value == '');
}

const focusEmptyFormValues = () => {
  const formInputs = document.querySelectorAll('input');
  formInputs.forEach((formInput) => {
    if (formInput.value == '' || formInput.value == 'on')
    {
        formInput.classList.add("border-blue-500");
    }
    else {
      formInput.classList.remove("border-blue-500");
    }
  })
}

const handleSignup = async () => {
  if (checkInvalidFormValues())
  {
    focusEmptyFormValues();
    return;
  }

  await registerUser(form.value);

  if (failed.value) {
    return;
  }

  success.value = true;
}

const validNameRule = (value : string) => {
  invalid.value.name = value != '' && !/^[a-zA-Z]+$/.test(value);
}

const validUsernameRule = () => {
  invalid.value.username =  form.value.username != '' && !/^[0-9A-Za-z._-]{8,32}$/.test(form.value.username);
}

const validPasswordRule = () => {
  invalid.value.password =  form.value.password.length < 8 && form.value.password != '';
}

const matchingPasswordRule = () => {
  invalid.value.matchPassword = form.value.password != form.value.confirmPassword;
}

const validEmailRule = () => {
  const mailformat =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  invalid.value.email = !form.value.email.match(mailformat) && form.value.email != '';
}
</script>