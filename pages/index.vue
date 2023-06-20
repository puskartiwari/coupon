<template>
    <div class="coupons-container flex flex-wrap">
      <div v-for="coupon in coupons" :key="coupon.id" class="coupon rounded">
        <div class=" font-bold">{{ coupon.title }}</div>
        <div class="mt-6">{{ coupon.description }}</div>
        <button
          class="coupon-button bg-sky-400 mt-6 rounded cursor-pointer"
          :disabled="!coupon.redeemable"
          @click="redeemCoupon(coupon.id)"
        >
          Redeem
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        coupons: [
          { id: 1, title: 'First Price', description: 'First Coupon belongs to gold', redeemable: true },
          { id: 2, title: 'Second Price', description: 'Second Coupon belongs to refrigerator', redeemable: true },
          { id: 3, title: 'Third Price', description: 'Third Coupon belongs to Television', redeemable: true },
          { id: 4, title: 'Fourth Price', description: 'Fourth Coupon belongs to Watch', redeemable: true }
        ]
      };
    },
    methods: {
      redeemCoupon(couponId) {
        const coupon = this.coupons.find(coupon => coupon.id === couponId);
  
        if (coupon && coupon.redeemable) {
          coupon.redeemable = false;
          // Add your redeem logic here
          console.log(`Coupon ${coupon.title} redeemed!`);
        }
      }
    }
  };
  </script>
  
  <style scoped lang="scss">

  .coupon {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    max-width: 300px;
  }
  

  
//   .coupon-description {
//     margin-top: 5px;
//   }
  
  .coupon-button {
    // margin-top: 10px;
    // background-color: #4CAF50;
    color: white;
    padding: 5px 10px;
    border: none;
    // border-radius: 3px;
    // cursor: pointer;
  }
  </style>
  