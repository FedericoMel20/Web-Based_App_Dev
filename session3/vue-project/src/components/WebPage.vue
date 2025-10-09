<script setup>
import { ref } from 'vue'

const liked = ref(false)
const disliked = ref(false)
const likes = ref(3542)
const dislikes = ref(87)

function toggleLike() {
  if (!liked.value) {
    liked.value = true
    disliked.value = false
    likes.value++
    if (dislikes.value > 0) dislikes.value--
  }
}

function toggleDislike() {
  if (!disliked.value) {
    disliked.value = true
    liked.value = false
    dislikes.value++
    if (likes.value > 0) likes.value--
  }
}

function message() {
  if (liked.value) return "You liked this."
  if (disliked.value) return "You disliked this."
  return "No reaction yet."
}
</script>

<template>
  <div class="page">
    <div class="stripes"></div>
    <div class="card">
      <h2 class="title">Rate This Picture</h2>

      <img src="@/assets/CenteredImage.jpg" alt="Centered Image" class="image" />

      <div class="buttons">
        <button 
          class="btn like" 
          :class="{ active: liked }"
          @click="toggleLike"
        >
          ❤️
        </button>

        <button 
          class="btn dislike" 
          :class="{ active: disliked }"
          @click="toggleDislike"
        >
          👎
        </button>
      </div>

      <p class="message">{{ message() }}</p>

      <div class="counter">
        <span class="likes">❤️ Likes: {{ likes }}</span>
        <span class="dislikes">👎 Dislikes: {{ dislikes }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Page background with animated gradient stripes */
.page {
  position: relative;
  background: radial-gradient(circle at top, #091540, #000);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  color: #e0e0e0;
  overflow: hidden;
}

/* Animated colorful stripes */
.stripes {
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background: repeating-linear-gradient(
    60deg,
    rgba(162, 0, 255, 0.15) 0px,
    rgba(162, 0, 255, 0.15) 40px,
    rgba(0, 255, 136, 0.15) 40px,
    rgba(0, 255, 136, 0.15) 80px,
    rgba(0, 162, 255, 0.15) 80px,
    rgba(0, 162, 255, 0.15) 120px
  );
  background-size: 300% 300%;
  animation: moveStripes 15s linear infinite;
  filter: blur(80px);
  z-index: 0;
}

@keyframes moveStripes {
  0% {
    transform: translateX(0) translateY(0) rotate(0deg);
  }
  100% {
    transform: translateX(200px) translateY(-200px) rotate(1turn);
  }
}

/* Card */
.card {
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  width: 350px;
  text-align: center;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.1);
  transition: 0.4s ease;
}

.card:hover {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.3);
  transform: translateY(-4px);
}

/* Neon Title */
.title {
  margin-bottom: 20px;
  font-size: 22px;
  color: #a0f0ff;
  text-shadow: 0 0 10px #00eaff, 0 0 25px #00eaff;
  letter-spacing: 1px;
}

/* Image */
.image {
  width: 100%;
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

/* Buttons */
.buttons {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 15px;
}

.btn {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: #888;
  font-size: 28px;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
}

.btn:hover {
  transform: scale(1.1);
  border-color: rgba(255, 255, 255, 0.4);
  color: #fff;
}

.like.active {
  color: #ff4da6;
  text-shadow: 0 0 10px #ff4da6, 0 0 30px #ff4da6;
  border-color: #ff4da6;
  box-shadow: 0 0 25px #ff4da6;
}

.dislike.active {
  color: #4da6ff;
  text-shadow: 0 0 10px #4da6ff, 0 0 30px #4da6ff;
  border-color: #4da6ff;
  box-shadow: 0 0 25px #4da6ff;
}

/* Message text */
.message {
  font-size: 18px;
  margin-top: 10px;
  color: #a0f0ff;
  text-shadow: 0 0 5px rgba(0, 255, 255, 0.6);
}

/* Counter */
.counter {
  margin-top: 15px;
  font-size: 15px;
  display: flex;
  justify-content: space-around;
}

.likes {
  color: #ff4da6;
  text-shadow: 0 0 6px #ff4da6;
}

.dislikes {
  color: #4da6ff;
  text-shadow: 0 0 6px #4da6ff;
}
</style>
