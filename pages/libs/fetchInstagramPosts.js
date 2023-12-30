// lib/fetchInstagramPosts.js
export async function fetchInstagramPosts() {
    const res = await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=YOUR_ACCESS_TOKEN`);
    const posts = await res.json();
    return posts;
  }
  