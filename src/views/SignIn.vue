<template>
  <div>
    <div class="generic_form_header">
      <h3>Sign in to My Malitel</h3>
      <p>Access your info, Pay your bills, Check your internet</p>
    </div>

    <b-form class="generic_form">
      <!-- phone number -->
      <b-form-group label="Enter Your Phone Number">
        <b-form-input
          placeholder="Add Your Mobile Number"
          type="text"
          name="name"
        ></b-form-input>
      </b-form-group>
      <!-- password -->
      <b-form-group label="Enter Your Password">
        <b-form-input
          placeholder="Enter Your Password"
          type="password"
          name="name"
        ></b-form-input>
      </b-form-group>

      <!-- forgot password/remember me -->
      <b-form-group class="force-inline">
        <b-form-checkbox-group>
          <b-form-checkbox value="">Rememebr Me </b-form-checkbox>
        </b-form-checkbox-group>
        <span>forgot pass?</span>
      </b-form-group>
    </b-form>
    <div class="generic_form_action">
      <b-button block pill>
        Sign In <font-awesome-icon icon="long-arrow-alt-right" />
      </b-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped></style>
