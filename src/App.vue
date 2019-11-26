<template>
  <div id="app">
    <b-container>
      <!-- fixed app header -->
      <section id="header">
        <AppHeader />
      </section>

      <!-- fixed app navigation -->
      <section id="navigation">
        <AppNavbar />
      </section>

      <!-- routable app content -->
      <section id="main-content">
        <router-view />
      </section>
    </b-container>

    <!-- fixed app footer -->
    <section id="footer">
      <b-container fluid>
        <AppFooter />
      </b-container>
    </section>
  </div>
</template>

<style lang="scss"></style>
