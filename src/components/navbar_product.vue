<template>
  <nav class="navbar navbar-light" style="background-color: #5a9ccb;" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png" alt="Shop Logo" width="30" height="30" class="d-inline-block align-text-top">
        Shop
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">หน้าแรก</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/buy" class="nav-link" aria-current="page">ตะกร้าสินค้า</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useProductStore } from '../store/product';

const product_store = useProductStore()

</script>

<style lang="scss" scoped>
</style>
