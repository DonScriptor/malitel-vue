<template>
   <div>
    <div class="generic_form_header">
      <h3>Create Your Account</h3>
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

      <!-- forgot password/remember me -->
      <b-form-group class="force-inline">
        <b-form-checkbox-group>
          <b-form-checkbox value="">Accept Terms & Conditions </b-form-checkbox>
        </b-form-checkbox-group>
        <span>forgot pass?</span>
      </b-form-group>
    </b-form>
    <div class="generic_form_action">
      <b-button block pill>
        Verify Number <font-awesome-icon icon="long-arrow-alt-right" />
      </b-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped></style>
