<template>
  <div class="sidebar">
    <div class="title ma-13">
      NBO The Great
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.image {
  max-width: 80px;
  max-height: 80px;
}
.title {
  color: white;
  font-size: 3rem;
  margin-top: 3rem;
}
.menu-item {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 10px;
}
.menu-item > * {
  margin-top: 30px;
}
.side-btn {
  border: none;
  padding: 16px 0px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: white;
}
.side-btn:focus {
  outline: none;
}
.side-btn.active {
  position: relative;
  background-color: white;
  color: teal;
  font-weight: 600;
  margin-left: 10px;
  border-radius: 30px 0 0 30px;
}
.side-btn.active::before {
  top: -30px;
}
.side-btn.active::after {
  bottom: -30px;
}
.side-btn.active::before,
.side-btn.active::after {
  position: absolute;
  content: "";
  right: 0;
  height: 30px;
  width: 30px;
  background-color: white;
}
.side-btn.active .link-container::before {
  top: -60px;
}
.side-btn.active .link-container::after {
  bottom: -60px;
  z-index: 99;
}
.side-btn.active .link-container::before,
.side-btn.active .link-container::after {
  position: absolute;
  content: "";
  right: 0px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: teal;
}
</style>
