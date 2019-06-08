<template>
  <div id="material-kit">
    <div>
      <router-view name="header" />
      <div>
        <router-view />
      </div>
    </div>
    <router-view name="footer" />
  </div>
</template>
