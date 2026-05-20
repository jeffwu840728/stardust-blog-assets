/* ============================================================
   ★ EXO STARDUST 全域資源資料庫 (Asset Library) ★
   ============================================================ */
window.STARDUST_ASSETS = window.STARDUST_ASSETS || {};
window.STARDUST_ASSETS.gunfire = {
  // 🌍 通用資源：武器、密捲、成就
  Global: {
    weapon: {
      鳳鳴: { kind: "法杖", img: "https://.../weapon_phoenix.webp", desc: "高射速範圍傷害" },
      驟雨: { kind: "法杖", img: "https://.../weapon_rain.webp", desc: "單體爆發王者" },
    },
    scroll: {
      //藍色
      野蠻拳套: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBZ0n8jyVSrrd-4owI-zXXDMKfS69aEmYcsVtTRYkcQlMlmxZkkqE2J87dNKbjzm07bDz_v81ncaA-qCEgzki0XKnq2SxCH0hij2ZTRluzt2ud9M3gCRcUma2GfXaaWR-qhkVq4SNcvxIK41I9eJ7glPiQ6gsR33mi1Zs3vmVVF9pzRu0bg4p1uDa1nSU/s64/Brutal_Gloves.webp",
        desc: "【普通效果】：未觸發暴擊時，本次武器/技能的傷害增加35%。\n【強化效果】：武器傷害和技能傷害增加50%。",
      },
      鐵毛公雞: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilCtoakl-3k178TKw5R40b-i9XlfDlKTTLKNNHKXsGvCFVRei4mDRqMBWVxzEdvtLESrXH3kDq0m70_auO_4TYAWoYwKIaq5NuLenWmjLcq6RcOvKg3qioSL_H4NrGLB8Ps7F6jxYsds5TIBoD33-82EJ6bbhIOLq78TsQrtMvHvi-U-__hJAA90HBXkI/s64/On_the_House.webp",
        desc: "【普通效果】：在行腳商處購買的第一件商品不會消耗銅幣。\n【強化效果】：在行腳商處購買的第一件商品不會消耗銅幣；靈佑使和奇貨商的隨機一件商品不消耗精魄。",
      },
      六發奪命: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBxXCEIw2rl5lRNRF7kdM9385k3_fddR0qtR9c4Nw14s-c46OK-zTlRT7JyAF9Gy4Hhm6cuHZ4uBEN01LQ63GHsyzM1fsJE0m0S2Z0jOMS53Yw-WDKBpG_a8PpBxTYuzGaNhWTzkq185jP2mNsYXupaHPVdjMv3XWJCc5whhrqFxYC8orl1SrAyh0ucGg/s64/Perfect_Sixth.webp",
        desc: "【普通效果】：每射擊5次後，下一次射擊的武器傷害增加80%。（換彈時重置次數）\n【強化效果】：每射擊5次後，下一次射擊的武器傷害增加160%。",
      },
      改良彈夾: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0YBMqV5-jhElsHQPyuluoBKMbcXb53NWDN_g66looMgqDIewA_9JPoUnK-NN8-r9pV46rF7RM-8eVTKV2PfgtfoQazLO9jNZczxu4jLw_fIdMBq5z84G6TyIkSNEpuy-L0r2BXYUeq_5dMvaVkHOB9gDsrM7HcWKspiI-y1WsVeN4MRiugVWWYD1uI9Q/s64/Improved_Clip.webp",
        desc: "【普通效果】：拾取的彈藥會直接補充至彈夾內；拾取彈藥後，直到下次換彈前移動速度增加25%。\n【強化效果】：拾取的彈藥會直接補充至彈夾內；拾取彈藥後，直到下次換彈前移動速度增加25%，武器傷害增加50%。",
      },
      先聲奪人: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjY1AWTt0lt4hrbEGBaEuI44ZuACoo8ddowaWAHw81dz90OiJkt81TjFc3rBKRVjuvfYRdCkKNTKpjwLkSPPvUi9904PGqV7kYRoOjMYAT6msG4XfgmZ0yuhyTkQojFbhulRnpzs76Qb9AZvY-hs0oUpsHEB_yI8GRQ9uGXtJZOT3AVzDXJy9I5FSZlVbM/s64/Preemptive_Strike.webp",
        desc: "【普通效果】：彈夾內的第一發子彈武器傷害增加50%。\n【強化效果】：彈夾內前30%的子彈（包括第一發）武器傷害增加60%。",
      },
      虛張聲勢: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJ9sbECSM4nnt2lSlvUvQjH1Vf1bcgqbZOk6sM4QAdCiKMlE3x_e6R45F84gC0hnXs3lfuqJeN4ZezIBmdW6QdI7IzIme5J_SJEAgN8f0_g_pdGsu-nATYo4NV-JdMtN051HT1i6RvWNU1WeV74YmjHbHA9cZjpBT7-xqWRykw4F0Q9vOq3Q913kV0LwQ/s64/Bluff.webp",
        desc: "【普通效果】：當生命值為滿時，造成的所有傷害增加25%。\n【強化效果】：當生命值為滿時，武器傷害和技能增加25%；當護盾值為滿時，武器傷害和技能傷害額外增加25%。",
      },
      破釜沉舟: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIuYJTsBLx7zc5nIfd3Y_4YzM3Mh5HAD2rap0jiuOSNPU0dpqcfibwAEYqumeYN_-SRek56lOEWhYmXwOFnE84jeZ8EmlzgAWJiQAX6RWzikqrJcS3UNqP8xZF5RuzXT3OjHaiQnVYyN_bJpU-_As9-dV_F8BruOCGcOGDhKcYoeT7CySkjOSW8YKdodw/s64/Resolute.webp",
        desc: "【普通效果】：當護盾值/護甲值為0時，移動速度增加50%，且所有傷害增加25%，護盾回復的時間間隔變為原來的四倍。\n【強化效果】：當護盾值/護甲值為0時，移動速度增加50%，且所有傷害增加50%。（該加成最少持續10秒）",
      },
      元素聖物: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSNTPHcSU3p-SIPoQtFXCe8ehpBaP0KqnzIgF8G-f4w1MM-obSkMCrc8S16bMpXa4yLPoJG6F0WFXZiqSU2TzTsNUN6AMXqP6boiSu3eshsSYIeipCl8MUu-umS42I8EB5L4UODUPiOx4fiQ_xvzfUzRwNzDyIJCS-VveJ7L_tkohO5dwjk_2dORgyTb8/s64/Elemental_Relic.webp",
        desc: "【普通效果】：每擊敗一個處於元素異常的敵人，10秒內元素傷害增加5%。\n【強化效果】：每擊敗一個處於元素異常的敵人，10秒內元素傷害增加5%，觸發元素異常機率增加5%。",
      },
      元素饋贈: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicAgehCleQjj2v4cFD4zgtuNqJn43iI9RKG1y0CCX24hrlLcO_yiKtqPTuJVlhx0INsgtgRSInzpl6rHzr0BOrQk_YHZI4XBP_1hmsOGxIuMM1k44h-aGM4iHKOU-Sjk2l3vSpMDfxwh6yM2_fh9TZbQKRBu342jnwSUltE9DUF3Y3KWaaxx71m5E58Hw/s64/Elemental_Bestowment.webp",
        desc: "【普通效果】：每造成一次元素異常，回復1%的最大生命值，並獲得5發手持武器相應類型的彈藥補給。（冷卻時間1秒）\n【強化效果】：每造成一次元素異常，回復1%的最大生命值和1%的最大護甲/護盾，並補充5發彈藥到手持武器彈夾內。（冷卻時間1秒）",
      },
      雙倍驚喜: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9cHYwCTIyMzsppiss-pzQjWSeZiNLEqm6DjSUmGxXzrsjOvW-eP1PK7vX4r93mmPBJjVURxKwfjjU1jJ3t4ci1TdCcN-btwFHIR4JEZ-KBCFvsRpuI3gWr5j7kxOcHLhKJcn7DU-hrgxPAudDy2KlXO-Fr6CJ_ZpODZOIs6xK8VgXlYgOp6mw9JxycOM/s64/Double_Exhilaration.webp",
        desc: "【普通效果】：次要技能的使用次數上限翻倍。\n【強化效果】：次要技能的使用次數上限翻倍，使用次要技能時有50%的概率不消耗使用次數。",
      },
      迴光返照: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_udlrSr6W_FCw5qUmf8FRKhi9uISb5XUrpfYsV22F-SqxnrN-4dx1A1hDd9NM4-CTslY9ZbWR-JWYf5AdBTwAKNZWiZERdNl8H2xgpGbHfB0H0D0CEmK5HxYTYyzLQC1cT0I4Ywb-GQGrZvEv9cuIDaROjVeT7o3ZYU4Al1kIr7Mr9GGLpGYCn_Kq6cs/s64/Terminal_Lucidity.webp",
        desc: "【普通效果】：若玩家單次損失生命值超過最大生命值的20%，重置所有技能的冷卻時間，（冷卻時間2秒）\n【強化效果】：若玩家單次受到生命值超過生命總上限的20%，重置所有技能的冷卻時間，並獲得一次臨時的主要技能使用次數。（不可疊加）（冷卻時間2秒）",
      },
      元素魔方: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5c_LCeoRJN4lJLtJ1FJ1SS4e_9r40_Gl27CyoRIjY-Lz2xN5cWp1CMpGkSrVcP5LPtEtQMhEtVxECwM1BDUw71Y9zpnlbdQFyVJDckw_n_ZywCSRvN_ZAaf2dlrDF6J2psIARehfqYZ2Xq-9jRWFFPklNpGZrigZFW5CyTFAHAQRG3VazB9hl1_Sm_zM/s64/Elemental_Cube.webp",
        desc: "【普通效果】：每次換彈後，隨機指定一種元素屬性，使其元素傷害增加50%。\n【強化效果】：換彈後，隨機指定兩種元素屬性，使其元素傷害增加50%，元素異常的觸發概率翻倍。",
      },
      魔鬼契約: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigdyoNc7rHGCmDI3vF6jTBJeiiQD2aO0RbuEdaUJE3CRxmrICNyj1uKsjBS741hxX33Eu608vY-MQ5jHCbZ567Cp-CW6K-lZ6yaKd-y1bxlwHVpJ7iikoGLvmJKgqoOS2HJc-FtWiPPAPWrOuWqLEGm2H55aE3YFj9Yc1hWmpeVTNJLUhK1b29XpVyo14/s64/Devil%2527s_Covenant.webp",
        desc: "【普通效果】：生命值上限減少50%，銅幣獲取量增加50%。\n【強化效果】：銅幣獲取量增加50%。",
      },
      彈藥腰帶: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnYdNp9V_KPvZ7BGMVB6yKF34h_XlCqjE1TTa38ATChVGP4rCd4GwjoyPEMJuB8VKS_PaGyEm1vRzPl_SEj7pyOWLvRqQIkzJCZK8kJNjOpfEXjpU0uSFsy3uSNXESNlSzctudrIiXe158PpfDKa7Nl9u9d0FZgn2xS-UXMyGMQDm1-Oc0c2UvbvaQpKs/s64/Ammo_Belt.webp",
        desc: "【普通效果】：攜彈量翻倍。\n【強化效果】：攜彈量增加150%。",
      },
      雪地戰靴: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8vQrkR4SO0b3sq8FrzJLkiAGOW-Sy_nxyYzNLbf81gEmvsZkME6XUeveZ7zE5q9LJDRH5h4LNpwGdTeNyxqVXQnYn-_a7gF1Wddtmn9OMoqnQEy5V6jj3Cd6RQ9czdZbL1FkCnYpZ2TNhe5UAdzNPL25pSzf-9h1Rap68iKSWE5d95XUi-oBmqY6aWTI/s64/Snow_Boots.webp",
        desc: "【普通效果】：免疫減速效果，受到的陷阱傷害減半。\n【強化效果】：免疫減速效果和陷阱傷害。",
      },
      魔術彈夾: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiV-ixmU-WtJO-g3H51S6BhA-bDKaw_YN2P8c_g7AQwcf-rxdJyfuF0OTG8etUsqez8HaWU8pxFnPqFsPl_xRL7Vw_Y724pfcmoKNNNoCb8WRsczutRpo_24s7qb6EBAqgABfRg6Ynu7pKP9yjlmGVVwda9p6JP3yh-rmuuR7WEPF9YVrBK5tepjwdsxbk/s64/Magic_Magazine.webp",
        desc: "【普通效果】：換彈時有33%的幾率不消耗備彈，且此彈夾的武器傷害增加30%。\n【強化效果】：換彈時有33%的幾率不消耗備彈，並增加與彈夾容量相等的彈藥到備彈，且此彈夾的武器傷害增加30%。",
      },
      無中生有: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPmZ0Y57_P7_6uryJhwc91lOWKdoWHKZi5If6VDVIq427iwxNIfc0dNVZ9TghXKnBnOzYWKM4T4EHMmvfCRw0W_dnIafuLWsYq-1JAqrMDtMnrQgrL-i_QjrzMCYIQvn08liA4IL8g7e8zk-72oSW6LQa9aP68FTcrUfH2E_cmmrONKha_C5bGI16t7VU/s64/Genesis.webp",
        desc: "【普通效果】：射擊時有20%的幾率增加彈夾內的子彈數量。\n【強化效果】：射擊時有30%的幾率增加彈夾內的子彈數量。",
      },
      堅如磐石: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgM-gcMHQ2TQTVgp6jAgIdHgbZWLX97ALY2TJCTq9GF9XGb-iMnvuf7mRbnFU35aayxr5wyHfynHjXQnQEylI8RG6udKUjhYiaKcPwKruf3AfR0JWVUu2BOjA-8mvbdhAXskewyZhEhdTVhtjXRkpRSViEQoJTiPaQzfWyqbNAl9B0SRYm5fDoWK5DgQCE/s64/Rock-Hard_Determination.webp",
        desc: "【普通效果】：靜止時，所造成的傷害增加50%。（移動後，在4秒內衰減至0）\n【強化效果】：靜止時，所造成的傷害增加80%，開始移動後，傷害加成仍會持續4秒。",
      },
      愈挫愈堅: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgk23on1GdSWD4mfzReDYrTggiPoOEUfLk1QtMEytLJX5sSD9441FG0OoQwgHiwg_ibWQxyn5xMyH3T1qfLV_CBruzc9gbo5dqC9YIuUcwDejCWwx6B5aYnCanxDKP2YpkgoocXz80Q0xec8QErOlRpKDWJCZoV2UabUXZDmqHCLiDqBuKB-2CIovF8NLI/s64/Persistent.webp",
        desc: "【普通效果】：每損失1%的最大生命值，受到的傷害減少0.5%。\n【強化效果】：每損失1%的生命總值，受到的傷害減少0.8%。",
      },
      異能神速: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOKqpteroJqXBTauS7qftw9uOyH6xRDSMqlZtxIuTb3eIKSXywOYjqWGb0KkvplL-Shla0ZDfgcDeNLl0Tdwvuh93cPvnMg5Zj85hi5hjKhlPQpv__SvUTyay8AdSNI078-M-n0iRFFFnDFDcsRNPKCZ_RYouzCizSHSqt_At99AQgxxiuao1GFvkgsIA/s64/Abnormal_Speed.webp",
        desc: "【普通效果】：每擁有10%的護盾值/護甲值，移動速度增加3%。\n【強化效果】：每擁有10%的生命總值，移動速度增加5%。",
      },
      凌空打擊: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXV-lWHzAl5yqgk6sf8NfJwXjKEM8qwRjzs0MSLjjCm9NGZgKkWFoi9zoClNzy4O8Y7Hg0pmdq15c9GZIy3VVwcQ2YS1kmv3pWK-69m_RD8h6lHiGc0UcLdWEIXPVQnp39L746-Q7M5T9jHWUcgMm1xfq4eEVUhZjEswm3x_y3Jk5GYhevL3iOUGvtoGs/s64/Mid-Air_Strike.webp",
        desc: "【普通效果】：處在空中時，武器和技能的傷害增加50%。\n【強化效果】：處在空中時，武器和技能的傷害增加50%，且受到的傷害減少90%。",
      },
      高級跑鞋: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFgaONJynr8d6YW9ygWyNNUWdUbKxvX1KOOlp4yhyphenhyphenE5S7pkuuQ6m7_bUmn__NgI-8djLyJu9AcMaWyfPrKu4rs1ri4H_TqaDyP510PtQeV2fy7B1RJyjY7GAeNLskq7LKpgsRAiXLxoIZNDvQkF3M6BNCPYd2pZYVL5-mothSGOmmMeSgXUgOBzwsXaSg/s64/Advanced_Joggers.webp",
        desc: "【普通效果】：衝刺技能的冷卻時間減半。\n【強化效果】：衝刺技能的冷卻時間減半，使用衝刺技能時有33%的幾率重置其冷卻時間。",
      },
      子彈銀行: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifbPEAai4zMXl2U2DQzWPTnOvGxQxYDfkqWXpqPaOZ9OVSdM0An_o6bCoeIHDwPY5o_ANdswGFWZe_VCvMy25CDKvKn1GRO01zf4QlxEVBEYF7nSoSS74vvvg4WwF0nv5pOpzpVs-zePPHLH2vs-s1vSeSUaHi8PHb3MdJ8_prY3w59bQOFeXwYTgugKA/s64/Bullet_Bank.webp",
        desc: "【普通效果】：拾取的任一彈藥將轉化為當前手持武器的彈藥類型。\n【強化效果】：拾取的任一彈藥將轉化為當前手持武器的彈藥類型，同時獲得3銅幣。",
      },
      美食專家: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiudUnS6zmoWtgGSYxSlYgxqLfHttwCnKOFEhS0ywiXdOwH7AYxyMRlYp1o4lvMbNwEAbkz2mWgjqeoKWTYVmbgXZ95SA-xBz4pId5S5laCOrGGM49U8dSzzEl7O9E22VI52xFiSq2gX2XAx3dW6KJKkQAHDuHu9ovfDihYTSHsCx216iMNZ_qBLTCE_1k/s64/Gourmet.webp",
        desc: "【普通效果】：拾取包子後，生命值會回復滿值。\n【強化效果】：拾取包子後，生命值會回復滿值，且護盾/護甲上限+50，持續20秒。",
      },
      隨緣槍法: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcgQabPLvuUeUUYW168vx1s_yeo6MKB2YnYvE1J3KYCJ81ZKPiJzix7SaPk38Mzu9lfd_BjyLPCkKrnqP6iUksavIwWhjzQslBfcsOTqkt_pn-NZW3079glXDbh4pjBuPsyIuQcSVh6CaNzokvVdUIiuyAFqGvl-ULFj6E98t4NnKZk_ArtmSdnZ9FQJ0/s64/Casual_Gunsmanship.webp",
        desc: "【普通效果】：幸運一擊幾率增加20%，未造成幸運一擊時，武器傷害減少20%。\n【強化效果】：幸運一擊幾率增加20%，未命中弱點時有20%的幾率造成暴擊。",
      },
      元素折磨: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFd35PMsutHq1UaxX5dFuJqBVAZ1-KruwmgFszOmDIgYFA6bWDVzBe5W4rS_loHPvhKc_R0qDhPnyK5PK7f3kQbOj2sbj_RlRgjkwtP8eZEHZ34kp7_K4GlJT3QJM9J22tWrxl8wBK6LP4DQc4DzwYa3h2FM4IQRn5qz_MAgCk3shqdEXHSNYfTqXaYvE/s64/Elemental_Torment.webp",
        desc: "【普通效果】：攻擊處於元素異常的敵人時，幸運一擊幾率增加20%。\n【強化效果】：攻擊處於元素異常的敵人時，幸運一擊幾率增加20%，攻擊未處於元素異常的敵人時，有20%的幾率造成元素異常。",
      },
      中場休息: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5uhIdpIn98v-m1miTPI1UCvBUkK31gWNrvp8kU0daysGS5AUyKEYRC-VTJwefN8VSUj0g5h9Kj2wz9gfUeMt4mmoiiOL3aq9422GCkESK9fOMBF_D2tEyBN7BxUJWyRJrzfKK_8oBk_CuFUa33cLKhdF2tSMRpHecaKQ1-aWfKTgXqyqOMDEhE8Twyc4/s64/Brief_Respite.webp",
        desc: "【普通效果】：切換武器或換彈後，在1秒內免疫傷害。（冷卻時間2秒）\n【強化效果】：切換武器後，在0.5秒內免疫傷害。",
      },
      狂戰之魂: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwQoR_xFSo3EM_x2CeStSb0-yXmLNGTHFNukXQ4rFhpdJNSm1aMvQm3vpPCxszAQNjksVnxJFspRLl6KBM3ENFore2Eo5sygxZwJbGsezcLnrjIjPv8i4QCzb2eD-8OOnrlyCYHHAmGJ4tcytZiU8uRsJ1VgWG4HmsahmepASB2BAGJ4Dd5HQWn6HO1_Y/s64/Berserk_Soul.webp",
        desc: "【普通效果】：生命值每降低1%，幸運一擊幾率增加0.5%。\n【強化效果】：生命總值每降低1%，幸運一擊幾率增加1%。",
      },
      刷步神器: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkaa0WDTFRIH75y6HP1r-ubLqq6DppTe-NLK3PKXaOtA29LWwkoxPeRgXLJFj0qGoXm4VNS3JgE0ucTP-zTGVkZLimQpmmiYkbJ9IuEjWiQ1DFnZXKNeztLNr1-MgxQuOpDuq3ibflRKqC5S8BRB1s_6aBKHLHSYb_FirNP4AUGTmnyKDZ8aWSC0afHIc/s64/Ammo_Recoverer.webp",
        desc: "【普通效果】：每移動1米，會隨機恢復一發彈藥。\n【強化效果】：每移動1米，所有彈藥類型的彈藥會各恢復一發。",
      },
      噬邪法劍: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiT8VthQrIelwXDP2Vz0jjsWw-sMW7YYzf0hnFQtclVhinVidYrRJxOawxNqo68Gwn1XGPvRYpnzLkMOq8uPbxVQ5vKxtGWINRQMUwHAIDNqQs9Yw6pNw5HhQIB38ciqIAQCHpkhA-FbHBtMD9JXUHpKquqDfTX3MqEQ_bt0kUzm6OodalB6p4Q2tqzBzM/s64/Evil-Devouring_Sword.webp",
        desc: "【普通效果】：每攜帶一個詛咒秘卷，武器和技能傷害增加25%。\n【強化效果】：每攜帶一個詛咒秘卷，武器和技能傷害增加40%，幸運一擊幾率+20%",
      },
      勃勃生機: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOeEH3rzsSLPwKrIzq3hjxgRHnTl98sJv4O9LJN8gk5_3gCaiyJYyqCXUhFP9YUc7IAQAGd-HHgOU10xlM7nUn36iDwd0VCePg0Pmgp6Mekhb4e35P9zi81utPBWdksXXxjVSCmrzai289-uP5p1mTPHFHWVRIXax6EbzTGqGP8IL-2wjaZef7l-AqcGo/s64/Abundant_Vitality.webp",
        desc: "【普通效果】：護盾回復期間，武器的最終傷害增加75%。護盾/護甲恢復滿時，下一次武器射擊的最終傷害增加75%\n【強化效果】：護盾回復期間，武器的最終傷害增加75%，且護盾回復無法被打斷。護盾/護甲恢復滿時，下一次武器射擊的最終傷害增加75%",
      },
      逆水行舟: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc6kaJFnqFz9b0DXb0fnQAyPmnHRLelIeHjIejdrqqZYGZWFdUV-lAd5YbiSp84iYN75PbekbI20eTLFI6RDf1MV5yo5t-SZRK3LbK0yD8NgU8M_6CgZB5DMLOVsO6GKi4W5kyCScKGEBCW3B_AUY8dKAEf8Ocz5khyXyykRvi4th08Ko2KPBq1leXNGc/s64/Against_the_Flow.webp",
        desc: "【普通效果】：對敵人造成傷害後，每秒回復15%的彈藥到彈夾內，持續4秒；若4秒內未對敵人造成傷害，每秒損失1發隨機類型的備彈。\n【強化效果】：對敵人造成傷害後，每秒回復15%的彈藥到彈夾內，持續4秒。",
      },
      快速裝填: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhokIqgc-LCxkZkTH0zyu4JK1hkPZ3qw0udFINYtQorJTDQrYY4LkjKGY10qkR8ZSb3GHPRulwYCUKfeLJYxnbUOHMduCa3BHzsLBwLnIuMuVlKYnTiEBrWdCdeH0VzTQOATsQl0pGkrgXOV3XlCvy9plj2f_Nf1zRFECNQaY3nlLPDeSqvhZWwJ2UIZ2c/s64/Fast-Loader.webp",
        desc: "【普通效果】：切換武器後，立即補充滿彈夾，且幸運一擊機率增加30%。（在3秒內衰減至0）\n【強化效果】：切換武器後，立即補充滿彈夾，前三次攻擊不消耗彈藥，且幸運一擊機率增加30%。（在3秒內衰減至0）",
      },
      滑板玩家: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhaD79WOL6y6VlnMnf8-xIw6xzcchMtfHfJljpjclo9UHocyaZ4oyEmbDr4ACTE2baDiRCoK7LvNe4-XqsEXxpIAFresXKwWpvig07mKjWTuICyjlIMUUyp630AvBiqZu_Gqthq3-4v9hu-oBmfHpMj9fbz8KONRvbjTdy7LLSXg10_QRZDvpFzFuG3vUo/s64/Skateboarder.webp",
        desc: "【普通效果】：使用衝刺技能後，立即補充滿彈夾。\n【強化效果】：使用衝刺技能後，立即補充滿彈夾，且在2秒內射擊不消耗彈藥。",
      },
      火焰狂熱: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg619mocXN92FiD47uHQWNSeXcZXYY8A2m13UF4MonxngNhLpkAK1MbnTtm757VlFY1Q22T68eSGrbvh76q6qodm7IstXl9WhBagOW1xf-lTCZJGAfVmsSu3sWy1ph4dTL-w4LqpR4ppYl-ntHtLJrtKFLDrHm17pYLtL2K5c5TJ-7SSs4HXOEHhejSeKk/s64/Fire_Enthusiast.webp",
        desc: "【普通效果】：對敵人造成燃燒異常後，也會對自己造成燃燒異常（受到持續傷害）。處於燃燒異常時，火焰傷害可以吸取生命值\n【強化效果】：火焰傷害可以吸取生命值。對敵人造成燃燒異常後，也會對自己造成燃燒異常。（受到持續傷害）",
      },
      腐蝕狂熱: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmjuITjOvJv5iLTgtCd4b1BFJdzKu_gfyiGjUABO7IFVD912OoMttL2H3SgJdBRgQ_b3M1z3e58MotLWq62EbXq_HmgtlDlc5Du9UjD9MI8IbFIfzkwxs60yDVNbG1c1fG5ejD4HI_WMHQ5p5AhyoFl5nWt-hkWup1oHEVgUlO6IKENIYqbPpMZP_cwrE/s64/Corrosion_Enthusiast.webp",
        desc: "【普通效果】：對敵人造成腐化異常後，也會對自己造成腐化異常（移動速度減少50%）。處於腐化異常時，傷害抗性增加10%，移動速度增加40%。\n【強化效果】：傷害抗性增加10%，移動速度增加40%。對敵人造成腐化異常後，也會對自己造成腐化異常（移動速度減少50%）。",
      },
      雷電狂熱: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjY7OFsGbu13iiPvl0UeTqhKdbBZ6fsRMZx-BY74iS_pLD7WNAfq3D_TzvqkRrPxh-fDPbUaRwoLCgznGTA2Cl8wR4jnZm1X6gTNiphRu8xYEvvlfguwKHtvSqljITCTmep12Qe3HHBy1j1jlRiK1lHCznWfAQpjqVM4rdk_wgapGiK6PTuu-6P_7mBbBI/s64/Lightning_Enthusiast.webp",
        desc: "【普通效果】：對敵人造成電擊異常後，也會對自己造成電擊異常（受到傷害增加10%）。處於電擊異常時，雷電傷害增加75%。\n【強化效果】：雷電傷害增加75%。對敵人造成電擊異常後，也會對自己造成電擊異常。（受到傷害增加10%）",
      },
      背水之戰: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIw-SoqzoTAWNoDkHbRZ-o70MtNModwtpdFMTXXik0KZGWfrYBD_8k2D_9IrAQhwoQVFPUvED-P5XwblzJUWeO66Nf_6PXt2wqBn8H7bAByDfjR1zkNdjL4L5mjWRFOWbWGvXmKEgFX5LkVgj5N0RM1TT3X2_yB6pePdn0YNLFVLaKHpEbbFbs0eCv-EM/s64/No_Retreat.webp",
        desc: "【普通效果】：當次要技能的使用次數為0時，武器傷害增加50%，且該加成最少持續12秒。\n【強化效果】：當次要技能的使用次數為0或主要技能處於冷卻狀態時，武器傷害增加50%，且該加成最少持續20秒。",
      },
      雷鳴反擊: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijpdaa0KpB6bDVEKlzIUe6O9ke5x-tvf_naaY13Jk1XJmV2v7iI8_Bh5PzVek7qCRurQksFAvu92Ad2duBGRTwKi-_WPZ-GUoJGr0mrP1VmCwxYPOV0NOz1Erifgnumlp6kB056pqnzjmatDkKfSXJtIP0zstn47h1cuxkmGevZ7RoN6d39mRG_yFPBYI/s64/Thunder_Screen.webp",
        desc: "【普通效果】：護盾/護甲破碎時，對自身周圍12米範圍內的敵人造成雷電傷害。傷害受護盾/護甲上限、生命上限、與技能傷害影響。\n【強化效果】：被命中或受到傷害後，對自身周圍12米範圍內的敵人造成雷電傷害。傷害受護盾/護甲上限、生命上限、與技能傷害影響。（每秒最多觸發1次）",
      },
      穿雲神箭: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiI4PgqYsvCSSnU7zVK11gHuy3HCM3lzyUtXsPCLdvRSVfDcnyzruY94JRhdaEKF8NrnF0R7XRX0UHcJgWU7rX3AeiV1OfQYXEGzu64EOOi3C3_DGyLW_a_r4vz3MVIVuZluPXN62pAhBZbjWL9RpV6JHvYsk28u9Oy8SV8oULRXkfMpnE8IYnt827AIQQ/s64/Long_Shot.webp",
        desc: "【普通效果】：命中敵人時增加武器傷害，與敵人之間的距離越遠，獲得的傷害加成越高。（最高100%）\n【強化效果】：命中敵人時增加武器傷害，與敵人之間的距離越遠，獲得的傷害加成越高。（最高200%）",
      },
      腐化驅動: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjm6QDhVxEpA8aeKxSluO0JKCr5Xk559FglhXxbRzZwzBzW0bCXPhtQ1xY3oi3ZumHpz-4WzZjvig05YcsT7JyObg6oJTpRm1ZCs9OhOcIprD7da2xm0Y9JuAqEVwpuUkVZtQyYbUGPsjBOPE9Xx7QTweKELkF87c08j1jzM9Cp-V79yHFfMvSZxJ72QyY/s64/Decay_Driver.webp",
        desc: "【普通效果】：造成腐化異常或傷害處於腐化異常的敵人後，自身獲得20%的移速加成，持續3秒。\n【強化效果】：造成腐化異常或傷害處於腐化異常的敵人後，移動速度提高40%，持續5秒。",
      },
      惺惺相惜: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheApk_lFSsdQZi1I59TXxlUjUrTaOSYYoztVTP7cbD4TUu4f2YinpWaKVGv6D-IxIyYELZ3TuZVXctmBharr3GJRM9eEFRiORtOqRvQnhlsVnEbLYOTqGB55Wh8oXJNpMJ5Mz7T3asN089P9jqNEBefoEWBoAZORjRh59g9hbmxr7i-PUkc8oVOdDK6tE/s64/Mutual_Respect.webp",
        desc: "【普通效果】：周圍每有一名玩家（包括自己）持有秘卷“惺惺相惜”時，自身武器傷害增加15%，受到的傷害減少5%。\n【強化效果】：隊伍中每有一名玩家（包括自己）持有秘卷“惺惺相惜”時，自身武器傷害增加15%，受到的傷害減少5%。",
      },
      有福同享: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiW_1iKqRG9UaAysrHwcmUhsWQ3JqAcYdrtMuofNW4wabzL52yhDv6P2anlA2cBd7zGxFobHEoQWwJv8w-6kFhHT0quwTosy15n07OTuLbYIFod2fx5hBRSqFHoL3brAEPB2z3g6z5Q8wsqRhZtLBsU0F3D6BLjPlbny27rMY3pzS9_B-KUuR6un6eZQ9E/s64/Generosity.webp",
        desc: "【普通效果】：包子的回復量提升50%；拾取/獲得包子時，所有隊友獲得25%的回復效果。\n【強化效果】：包子的回復量提升50%；拾取/獲得包子時，所有隊友獲得25%的回復效果，隊友拾取/獲得包子時，自己獲得25%的回復效果。",
      },
      極速支援: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4WEPLz4JYW4qZ1AXnu89p419ISPjgPoQ9Ow7k_-V9KCI9XMo33OBuQrI84CO2_IO_TMGq5404Qm2cFR1bMMk9YxQadZQ_TjM8INxcmY003DPei46QJDk513D8iIoQjVR2N30gR51hc-omffKEAUKmtm7RbkbteI9nSqDxudEucJE33Y-y1GxxLO1EGeU/s64/Field_Support.webp",
        desc: "【普通效果】：處於移動狀態時，自身及周圍15米範圍內的友軍武器傷害增加15%。\n【強化效果】：處於移動狀態時，自身及友軍造成的傷害增加30%。",
      },
      刮地三尺: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizteZsy-n4tcg0v3zrkADdElNjtcAAJFLULWapNkFQurcwT_-xPMRH3V4K3gopU6BXEF9dLT1s3FPlhosGhK4Yq7zX_JKccPPxv05DGI12XXvXR7yyoaOmeCZsBbGah1FD6BWkkMWvALYspupnUVdgTiT9tITvEo1bG4TPd6bHiTb8rT03mzelSK5xViY/s64/Hidden_Treasure.webp",
        desc: "【普通效果】：擊碎罐子掉落銅幣，有較低的機率掉落精魄和包子。\n【強化效果】：擊碎罐子掉落銅幣，有較高的機率掉落精魄和包子。",
      },
      待時而動: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxENscb8IJoGSrePCsDgJnJH-KqASHmhedDm5phLBu-YK26zJUxjZ04VyOVZlIYKCYanEQDw5dgxIMY_9_SCPjsmuQnky9yIMqThEuYur4fpxAzWmQBbWc1SYC6zxWgx1TiZ2E6AX2whM9rjfm6F_xGt85TBzDcBx_hNKTxExyN5rctF2yRLFjG3KS3bY/s64/Wait_For_Good.webp",
        desc: "【普通效果】：每隔10秒，下一次射擊必然暴擊。\n【強化效果】：每隔10秒，下一次射擊必然暴擊。（最高10層）",
      },
      額外驚喜: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidv6aIyxJuhaswsScT0LY-VE9dylVITprJeKwivuXPh8VmUInVXCxDQYvjuJLd3veHIhbhtvjVXKRr9b0Deddpo2BpKvpVGeWWBp0FYc8FnAVP5BG_amMKe80n8IgzCCnGQCxaE4lbElcjvWsOKiFb9n9iUC0LBU0Jiv7iP04tKHSL4ZqlHI7UFbOTh6E/s64/Extra_Surprise.webp",
        desc: "【普通效果】：擊殺敵人掉落額外的銅幣，並有機率掉落次要技能補給。\n【強化效果】：擊殺敵人掉落額外的銅幣，並必定掉落次要技能補給。",
      },
      蓄能草鞋: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtI9iKqha1RsFKtbA0ZrWwSGfdgKBwSbcfnJum4NjfQqPndqJuapHpzlLJCFFZpDEI4kmPzysjV9YrqHr2whJXLrk3J23xJtrqk8cZmRgHsn2ITfmp6ES0EktWnQ2p3hNnYrAycej8TmjQ06-vxsSYC8FbcdmtJlVI5_nqwNcmrgObimuuWpDrecEzb3A/s64/Energy_Sandals.webp",
        desc: "【普通效果】：每次使用衝刺時儲存24點能量，使用主要技能或次要技能時消耗所有能量，每消耗1點能量增加1%的技能傷害，最高積累600點能量。\n【強化效果】：每次使用衝刺時儲存24點能量，在獲得能量有33%的幾率直接將能量充滿，使用主要技能或次要技能時消耗所有能量，每消耗1點能量增加1%的技能傷害，最高積累600點能量。",
      },
      積水成淵: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiT7bEwN8Gp9vNGi1FZI7-BXKYLWfPLHyOScPvbS6_l1dPNG2dAf3OcrJ8D2gTAws13_Hs3_mkCgoi5MymkdonJWCEU9lEVptnEz1Kw4oP_IzbOpUZtYt79VdBFf0ifu8dhrbYXG3PcMeO3mnGF76w8iP7ZYOITP6ZTwKXGRibjSMVKHcYKJD6BlkaeaxY/s64/Skill_Booster.webp",
        desc: "【普通效果】：每次暴擊獲得4點能量，釋放主要技能或次要技能時，消耗所有能量並增強技能傷害。每消耗1點能量增加1%的技能傷害，最高積累500點能量。\n【強化效果】：每次暴擊獲得4點能量，在獲得能量有33%的幾率直接將能量充滿，釋放主要技能或次要技能時，消耗所有能量並增強技能傷害。每消耗1點能量增加1%的技能傷害，最高積累500點能量。",
      },
      孤狼只影: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpBhQOA1zizVLP4h28OzwIu0Lw9X9fw1yllDrClZIFuDlNQFdjDsHtybdG5t21hL1f0XMgGiOFT9WDxQrZsnr0U8s4VvGpWmhUhVL9dzIdqxqPdEqfpyViGAkQ2vmj-KVukG7oE7DHNFyBKSYsvexN2dRNq3AtuDKLArdsoiAHLWZDA5KMHIZi3yZ1Qk0/s64/Lone_Ranger.webp",
        desc: "【普通效果】：自身周圍12米內沒有怪物時，每0.5秒獲得1層狀態（最高20層）。反之，每0.5秒失去一層狀態。每層狀態增加1%幸運一擊幾率，20層時，額外增加5%幸運一擊幾率。\n【強化效果】：自身周圍8米內沒有怪物時，每0.5秒獲得2層狀態（最高40層）。反之，每0.5秒失去一層狀態。每層狀態增加1%幸運一擊幾率，40層時，額外增加10%幸運一擊幾率。",
      },
      備彈之光: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIypaFo9m0Q2alyEipLyLkM5rWteHGr4PlUdFxQymi_J-YP2jVp9q_6tO7kQA5FNAGjmL9bgqyA16J3huRacEq9VsEG0B-BXGWSrACsTfQXHoqB9Qr4slYlgOmogNp3y5odBNuqaaqlqYr4H0QAo_Xv9GKAQFgVIhqyFpkCJ2SRmIsbwV6jPgHwZXwwdM/s64/Bullet_Light.webp",
        desc: "【普通效果】：每次射擊都會額外消耗1發備彈，並增加25%幸運一擊幾率，如果觸發幸運一擊，則返還消耗的備彈。\n【強化效果】：幸運一擊幾率+25%，觸發幸運一擊時，則恢復一發彈夾彈藥和備彈。",
      },
      戰術周旋: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2z749sjBbOW4_Dlp5tZXwBW2C1fbJRHfbrJkPz3OGyxiC68bKi2VIeV_Kd6QGBz3ZWAo2llubkQqWhx8-Yf4o3aP4Keec6raOMGMBfeXq9wx4utOX-lXzQK-5D0z98Bfvmy30BW4XOTMmyXCkrowPwPlQX8l3J5di8nQ9J51qCocbKQ58OpOfGtCsYNM/s64/Tactical_Reload.webp",
        desc: "【普通效果】：換彈時，受到的傷害減少20%，移動速度增加30%。\n【強化效果】：換彈時和換彈後4秒內，受到的傷害減少20%，移動速度增加30%。",
      },
      堅忍之軀: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiR21xM48vG0PZj9JTxMuyWwN93TOt2LWWXQ_RUKRnJ4jBrNhnyLdyhqs01YcdQWP4DIp8C_Hjo3eTVI-rLyVXvTbt56-Vc0nJy0B3QmKtrBM9NNGr1n5a1vDNrBqTR-y65r4qnUXPS1D8YdpzqMxAjKKWF3At303uiJtalraUajwFXq9kusdkt2YXWQ_Q/s64/Resilient_Life.webp",
        desc: "【普通效果】：受到傷害後，每秒回復3%的最大生命值，持續5秒。\n【強化效果】：受到傷害後，每秒回復3%的最大生命值，持續5秒。（最高5層）",
      },
      有效分裂: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYHZRyJpS1ZaymljXN2hKW8K8g8KSsERz5v8VN8VrZvyK8RPP_e6LlJPSHUw3gnB43mAupOwwPP7lQ5NukM-ljTzWz8P3_V7QjM3FqjDiqSJzt003Slr6n-S0MHtHRc4H7pKzWTo7y2Fpy9aDBaePY8pwWqBR-1tDvgPDj-nlNtTuED1Yx7pyKYswC_I4/s64/Effective_Split.webp",
        desc: "【普通效果】：拾取後隨機獲得兩個無法丟棄的秘卷。\n【強化效果】：拾取後隨機獲得兩個無法丟棄的秘卷，有50%的幾率獲得強化秘卷。",
      },
      秘密魔匣: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioSYgEmUW0I-jOoisbmTnn1tN2Qmy1sxmOiDZrrBb4YhEEv231ktqLhlOPn_OwlOEXWmc_b0NwLdLpfFpvdacxWt3ODtisKcu9njs9KVaHnyXgV5A-pknbWGAhVeDpRLThHHuDxxeOKuQOOjzNbOtYDqs3IFsvoxZK_4oNjKlxE6UCQ8n5mPhOPPrKyQU/s64/Curiosity_Box.webp",
        desc: "【普通效果】：拾取後隨機獲得1-3個秘卷。（極低的機率出現詛咒秘卷，無法丟棄）\n【強化效果】：拾取後隨機獲得1-3個強化秘卷。（極低的機率出現詛咒秘卷，無法丟棄）",
      },
      亦正亦邪: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOHno-Jm0Sl8y68p1dG2eWL3DL9yjg82d1riZa0svn_l_ORZ9VqzFqrGcJ_KxuYRRyYq7P90KLlb5qljIiuU3IEp1a8iMeWYoGd6ysEwsXU6Q4RDV5ufXzlLjzr4MS9vsDiP6lfb1kcpagPBFqUI18PyNoplngOhRbyr3l6NQSGBukeRe-nQ4j_Io3ZLM/s64/Good_and_Evil.webp",
        desc: "【普通效果】：未攜帶詛咒秘卷時，幸運一擊幾率增加15%；攜帶詛咒秘卷時，每個詛咒秘卷為自身提供15點護盾/護甲上限。\n【強化效果】：未攜帶詛咒秘卷時，幸運一擊幾率增加30%，衝刺/主要技能的冷卻時間減少30%；攜帶詛咒秘卷時，每個詛咒秘卷為自身提供15點生命上限和護盾/護甲上限。",
      },
      趁其不備: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRZ1vkEDTcFgUotzDYwgVDrhfIPLV_HHYM2k3AY2iaLY9LlYs6Oh_shaa48gn-DgGzS4ssX3R3NZRShNLW0gbbVWLqjhW0qx0i9Cby-FzT1ZLQIVOklFB432RF9P9iv3cbXSRyVL9UewOKlGTW5nzg5nxv3yZIjVJxHsWIUjpH6vIso_y30yVCsG3Cx5g/s64/Sucker_Punch.webp",
        desc: "【普通效果】：命中生命值高於70%的敵人時，技能傷害增加45%。\n【強化效果】：敵人每擁有1%的生命總值，對其造成的技能傷害增加0.7%。",
      },
      重型法師: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivbAuzf71DMoMznBGktpWA_Bcb8hSm3NwAiJMmLfZd3gqdEPVDF_8mynIGwM1JK6iM_63kydzx9bWPkv064DojPOp8HNhh2PyPZJsjRPkLsiXTJjgl2hXfCwGlMxFTdeVxLEziJ9Ex91HfZ2QiAwoOuKY1WQxWasQ8-MfcdDH8fi-35nEWwP0VeEdhpxc/s64/Enduring_Caster.webp",
        desc: "【普通效果】：每擁有5點生命總上限，技能傷害提高1%。\n【強化效果】：每擁有5點生命總值，技能傷害提高2%。",
      },
      睚眥必報: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqiLvGM0zSCojxMtgt69NJBXetaBSQrCl-2Tg21P1EV4GfeQ6NsNU-zSkjpIJE4Wzy25GCkSV7udfwccrj_MX2Bbn2vpNuQd7H__O1WMHvJh8mlN1_fSu00ugZ9MlJbsbA87D-1inaESQunO-sngRryQH0_YXIly5K2Nq0_5T56xSzlcbijmhEaPY-RYA/s64/Vindictive_Nature.webp",
        desc: "【普通效果】：被命中或受到傷害後，武器和技能傷害增加40%，持續10秒。\n【強化效果】：被命中或受到傷害後，武器和技能傷害增加40%，對攻擊來源的敵人效果翻倍，持續10秒。",
      },
      事不過三: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJggMUDf-fqU9A4FGyJ0MZ5Aqyn4Eu2kxz-9GZRACDoDCIw_50oBdj1k7-3F_0XgBlMwFee_QM993dgUKjSaQo4XywrY2BaIpjTa4Sg3d6O4qeWseaksOadtChaVMrzRrEW9e69eTGMtGypbsLSp7gomt75V4ZjjSaLQXOZkK444Rw1obt9Ef9UeUT3Kc/s64/3rd_Time_Unlucky.webp",
        desc: "【普通效果】：武器傷害提升50%，自身秘卷大於等於3個時，額外獲得一個秘卷。\n【強化效果】：暴擊時，幸運一擊幾率增加50%，造成幸運一擊時，暴擊倍率+0.5x。",
      },
      標準彈丸: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOkRi97Df0lrJzWq_fRS05aoNcXehVnb95rFSi2iOwldMiXqR6CmsgP9v1T3E8CWL9KTMk4B1agnBGLuMOy8YkfSefnc1KqWDSpxkIy6HxLtrl9JDVLdEO7sQ-Oo31h_Zao6Sf9dYof3ltD2Fs_KAaFeq2c5FwzM8yy9qf_xuqeMJqLMRsUBBxRoahFoo/s64/Normal_Ammo_29.webp",
        desc: "【普通效果】：標準彈武器射擊時會額外扣除1倍其他類型彈藥。本次射擊每額外扣除一發子彈，武器傷害增加30%。\n【強化效果】：標準彈武器射擊時會額外扣除1倍其他類型彈藥。本次射擊每額外扣除一發子彈，武器傷害增加30%；每扣除1發大號彈，幸運一擊幾率增加30%；每扣除1發特種彈，暴擊倍率+0.5x。",
      },
      大號彈丸: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFi5-msx8_MseAw8jzexNmuWoKvHGKw7pd-Klz4ReHKflTZsbmTDs7QEGTVSotcdY9rPHYSsasRX0nUMSwt8cG1re8T_z2ly-KdBSJkVlzWob_RrtMFLZdo8gCBMqwzzEktpeP30FVsUeF7C0dmEejlYCHT6LbhSXk_F1Yb_jm-xe3v7en4pWXYBgCJ6A/s64/Large_Ammo_29.webp",
        desc: "【普通效果】：大號彈武器射擊時會額外扣除1倍特種彈藥。本次射擊每額外扣除一發子彈，暴擊倍率+0.5x。\n【強化效果】：大號彈武器射擊時會額外扣除2倍特種彈藥。本次射擊每消耗1發大號彈，幸運一擊幾率增加30%；每扣除1發特種彈，暴擊倍率+0.5x。",
      },
      特種彈丸: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxW9SuA59ZQJTZQazu98MBCV9G4nbGjCHG02z-6F7f0jxJFv-L4aQWk3Mcal1t9ydSZ-PBxt8T_nJgJJlE_ezHN4aUN8oDX1Fko4l6ruBxAWOhTAcI7vMqHk9KgzpYAcnIs0bpoA1CzezBeCkn_P2raZvKOrupTmZuYl6bnIFeIqpYcl-ezxLE3crUVCc/s64/Special_Ammo_29.webp",
        desc: "【普通效果】：特種彈武器射擊時會額外扣除4倍大號彈藥。本次射擊每額外扣除一發子彈，幸運一擊幾率增加12%。\n【強化效果】：特種彈武器射擊時會額外扣除4倍大號彈藥。本次射擊每扣除1發大號彈，幸運一擊幾率增加12%；每消耗1發特種彈，暴擊倍率+0.5x。",
      },
      心意相通: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKrEyYXxI4119s1zeAb_G4g9f0ETMrQnEeDEGSTbCgU1evMjwCi0KpceWhIWjF6Gt0wc0u9KzsYTxs2hK7LKpjJQPPO9hvapyUeL_bBysQK1beCvAnRGNdZA4EBxCvGsAanBQgnMc-khyphenhyphenffKXGoP77xDuZbT5gqI5I2CKpY_-JpkqDQrE1gxCXkbYfHyQ/s64/Connected_Mind.webp",
        desc: "【普通效果】：每和一位隊友的武器類型相同時，武器傷害增加10%；武器一樣則武器傷害再額外增加10%。\n【強化效果】：每和一位隊友的武器彈藥類型同時，武器傷害增加10%；武器類型相同時，幸運一擊幾率增加10%；武器一樣時，暴擊倍率+0.2x。",
      },
      破法子彈: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2sKFhw4g8SSIG3il_xEFc53hyphenhyphenAHDqMtZinvYfaOEK0Dh44JU44Awi5ohbOxYXSvgY4wp3rQxwmXhovHzZXU7F8ch1WNI0jwNOxWQyXLKAOZ5C7L_4RHEZ5lehvDHg3KXBF018zesLWWyibibjpS_9piKZSWJZP2gkXKYA2zqIp4vArH2-LkOJQZnHfi4/s64/Piercing_Bullet.webp",
        desc: "【普通效果】：對敵人造成武器傷害後，5秒內對該敵人造成的技能傷害也會增加40%。\n【強化效果】：對敵人造成武器傷害後，5秒內該敵人受到的技能傷害增加40%。",
      },
      心無二用: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQiRiwp0pEs5CkKJvhSmvrpnBaynOrtapXsldvndbh75AZyQAhOHxvq1CIGuukkBJ8xQx5FeHnm2G6LOzpkmGlge6VRQkwVUMpsTnbl1U7JC0G-vp9s531lZYlAt582BgwVy0HZzjUbx0KRGYq1N__VSGQX1fF9US_xyZE048_xL7QRzD9d3qZSMpN8c0/s64/Undivided_Attention.webp",
        desc: "【普通效果】：每3秒不使用主要和次要技能，武器傷害增加20%（最多3層）。每3秒不進行武器射擊，技能傷害增加20%（最多3層）。\n【強化效果】：每3秒不使用主要和次要技能，武器傷害增加30%（最多5層）。每3秒不進行武器射擊，技能傷害增加30%（最多5層）。",
      },
      臨危不懼: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtPaoFeg8_VG1etyx0xxdZfYmwsccb7icAEz9BoteekItfNRwnBCj_wNRsfp5RZuEPkVn0QhbAQFnMcPT-jepmkRapLCh6tB1YJc8YdMdwjZIgCMvWlFcG7yuTJOSL8Yiy94x0F8E198_sqO2ArC3SB2Nglm7aETN5-Xz3FZBoeRH2RELgc8HGDAVPZj8/s64/Battle_Nature.webp",
        desc: "【普通效果】：周圍10米範圍內有2名以上的敵人，武器和技能傷害增加50%。\n【強化效果】：周圍10米範圍內有敵人時，武器和技能傷害增加70%。",
      },
      揚長避短: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLog16xr5HYAB1JHj3aQMgySPdKRPDS6DLMBb8Y0g1g8GwuwksOKBPnAS5KO34ojKaNjtDyPzwf2pxhBZPn-yBgMrtXJq7-UopJf6Lumm4Quok_3CvYwP04Gokkau5kqu7L2zwGDaZ88r9eDPivqTKVs7VwH2WbZbhZJbXJB20cDIRNZBK63aSfNIjq70/s64/Reasonable_Exclusive.webp",
        desc: "【普通效果】：丟棄該秘卷後自動銷毀，隨機將一個最低等級的覺醒降低1級，然後使一個最高等級的覺醒升高1級（等級上限為1級的覺醒不參與判斷）。\n【強化效果】：丟棄該秘卷後自動銷毀，選擇一個覺醒降低1級，然後選擇一個覺醒升高1級。",
      },
      有始有終: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGwSuTcl_b3RkurHYCKN8bPKXSF2BLJ-5cUaFKjw96QOBW8JIfAvbfkc0D7na0TYwDLlpPRxSHJ02shtSMrKAg-jGPgO8Gs31zKHXBrBQKR1t3ai4LzhosQsyaLzj1KIYx807TObgvF7cAKEQIs_YfvysoYIkBW48bUHiP55ccKkpqBFp3SDaaeOLp24g/s64/Empty_Bonus.webp",
        desc: "【普通效果】：若彈夾清空後換彈，則武器傷害增加40%，持續6秒。\n【強化效果】：若彈夾少於50%時換彈，則武器傷害增加60%，持續6秒。",
      },
      火中取栗: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggqTUG5vcI6830ezUOXUEgMPw7fz3nBYOP5wXVuxHxZOO9lJ42tvM-3JSv4y_pN7FkVVe4AOoxRUJDVRXCAwAfHoX1wI8bCPIj37vvYK1GCO_BLftRdiKNyNefLQKpJhNKK8uXhEjy7jl1NxFNh4syP5JJjRB9NqiZUogFZgdujkRhzBpeBf4W4K0Mtb8/s64/Priced_HP.webp",
        desc: "【普通效果】：切換關卡後生命值變為1，提供被扣除的生命值3倍數量的銅幣。\n【強化效果】：切換關卡後生命值變為1，提供被扣除的生命值6倍數量的銅幣。",
      },
      見機行事: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkeE-Mx24ONGWkNIz1qAaw4MPu57mrl46SEIh-XW079rc7nkfsR7l1iC51uzFfb40pCKBGuedZbYA-x66pf1MLlwDVzxK9QEokFtNLGE-nk4NKtFAocR_3eccy9Ri77l3Z7Ped1lEtEZ3Ov6AJOnrXMM5jPoEu7wZgnNVgRc7S3lmaGeCmiiiwoQDwE0c/s64/Efficient_Firepower.webp",
        desc: "【普通效果】：次要技能使用次數小於50%，在回復使用次數時有50%的幾率額外回復1次；使用次數大於等於50%時，次要技能傷害增加60%。\n【強化效果】：次要技能回復使用次數時有50%的幾率額外回復1次。次要技能使用次數大於等於50%時，次要技能傷害增加100%。",
      },
      應有盡有: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgu6SmBt3opxl_RpFEae9Lk1bFINA-ZkrDEiCt53GTHB3kg8S4rBRR0HHjNYO7PuQP16FJLIkAbBwDO-yQrNU0IH80vIoz6kMh4fJ3UT30Rmpp2LpPVEwkN2R9v9uMyS0kBxtIUI0WknxiB3JI39sA0O8i_04MQmNQ0WlADU37jAok_8c1Nr1rfIF2E_L4/s64/Stable_Supply.webp",
        desc: "【普通效果】：行腳商的商品欄至少出售一個秘卷。\n【強化效果】：行腳商的商品欄固定出售兩個秘卷。",
      },
      熔爐賜福: {
        tier: "normal",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYAChxhi9OEEZ00toZVI2-7vGKHQ6gF90pG2S2x4h-Mdey_cqHJPwvD7PiirUBCN_nR7nBpFk8YUkT0a8-xrTTWjaWyMhG9TN8HoiTAs_gla7uFwrtUAdTzqqpXHtOan_SoYOhQikA3PukelAHo_O03-5YxfC720ya-CtfAoB3pBziy68SkOZkoMYGBuA/s64/Foundry_Blessing.webp",
        desc: "【普通效果】：熔爐射擊命中後可直接擊敗普通敵人，或對精英怪/首領造成8%/4%生命上限的真實傷害（冷卻時間5秒）。\n【強化效果】：每過5秒，熔爐射擊命中後可直接擊敗普通敵人，或對精英怪/首領造成8%/4%生命上限的真實傷害，最多存儲3次。",
      },
      //紫色
      異能之驅: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3AHfSLAdTOyDCZ5i8xjXqL1YwLjPXyBmwiJTXkm36GNVNTJOt8JyLOY5clGLp_k8z-p_hIfopCZYA_wM_6SxFuueFuCuqUXNfu6C71kQeLWOFa-fcEGcgWvsTjzyHwZ8-TNqnv0HpoXr2HQLiLxMFLSHubxuW6SjdB0yAqO4BbDJ0H5Q2eEYuperZdow/s64/Paranormality.webp",
        desc: "",
      },
      血肉之軀: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9urLNYKf6_GX_JBHJs77IxZHdWxU2eLnqeCUbqIK2c6UjNON21uMGnGkoKo2KWwEjI-EsdRMak8ZwMvLcN5T8ncpmqBk_NAgo0p2sDK4xSSjgiIsxVXJpyZGct1QqN677l3gxpUS7iKXwJCYZcVY_pZtKr6tntHM1IxTWbtqJzsYsLCL790vd8LN3SII/s64/Flesh_and_Bones.webp",
        desc: "【普通效果】：所有護盾/護甲轉化為生命值，並每秒回復2%的最大生命值。\n【強化效果】：所有護盾/護甲轉化為生命值，並每秒回復2%的最大生命值。受到傷害後回復效果翻倍，持續3秒。",
      },
      救命稻草: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBtOzL9yXAqWa5kXSCOniu3AIFsYCth1Ro245Ogz019Ba-2fdN9yRw6udnxqUCd8MG6BlOFNSAOh5N2SkBSpACK6zm8O12rj5eWUH-UFlr_3uvwrCKnturm6eW5bwTH8PYdARS1BADWf-xDPEAdwvWyW0tPrk3xcOyu8HrmgruEzOsx85Ie2YJzYa3uBY/s64/Lifesaver.webp",
        desc: "【普通效果】：受到致命傷害時，生命值維持在1點，免疫傷害1秒。此效果觸發後銷毀。\n【強化效果】：受到致命傷害時，生命值維持在1點，免疫傷害2秒。此效果觸發後銷毀。",
      },
      浸血彈藥: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKNM1Va4TjaLxhLwwH94H5ABoSI9VrhbtjKAWfXDf6pS26xvlaRIQv6iM4hXuCvLl2Ica73NhPRBkYMlHH9cADXVeciI8faUBt18qYqYOiLxVlazyIosSB5JQ2Yv99PnawuIaosT0Lwa3vfqMSF0wR0NBuBo9d9v1w8Dj8MnYVOzzkDSEBzUl3HKTVDVM/s64/Bloody_Ammo.webp",
        desc: "",
      },
      三重輪回: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhM0HZzovjJKpMpjQwmtRrEyXpuwWdXmDlJFA3pyOLYTjfE5LW9WFYc4HawdYrJLQ3EemYTKU-KaB4HHARVvZwWW4NHoWprcz6xNIjOzIUKIEVsiFx9-SIAkKsD3acDixLW3sn6RAfece1X3gJi6DYYiGx3rZP8Wd1hG9jK62iupQHBaBvKkAdjhVZpfKk/s64/Triple_Comeback.webp",
        desc: "",
      },
      鮮血聖物: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXxaWFIhyphenhypheno9E0GaIDaN5u980RrXH45xagbp4RJLrS5yFQbnD1gPxYiCuQwbjrdngsIVpRiyMTmTtb0YIDbBB1biasUU_S0ifEDkKN3tvMP-Wgoyze9XpWmiVK16xOcsLgVnJA6nfbOKEEW69BF5zykjZpcMbCzrhwUQKH9VWb_4ghrOSZ47PmVlhYdMNw/s64/Giant_Slayer.webp",
        desc: "",
      },
      巨人殺手: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXxaWFIhyphenhypheno9E0GaIDaN5u980RrXH45xagbp4RJLrS5yFQbnD1gPxYiCuQwbjrdngsIVpRiyMTmTtb0YIDbBB1biasUU_S0ifEDkKN3tvMP-Wgoyze9XpWmiVK16xOcsLgVnJA6nfbOKEEW69BF5zykjZpcMbCzrhwUQKH9VWb_4ghrOSZ47PmVlhYdMNw/s64/Giant_Slayer.webp",
        desc: "",
      },
      忍者無敵: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6LNcL2KlbeaOINipWiVGUuaUmO7gKQF258rA-9r54HTW14nw1IhkZZFPCNJ0wMJnAuRBOs9NJvoDr0h-aTsF3_ywWxWKAEyAt8axORyQj_BrXZrieiMo4W37x_JGuSOtnuiw19SWRno0brRO0LLAWI1oRTPhlBd8mAEXyq585r2hAnoYmM_TaznQfqOA/s64/Ninja%2527s_Discipline.webp",
        desc: "",
      },
      銀質徽章: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgh1jk7nKwPsyDMFibtjVZnk-erYAnHYtMldkEeXbXESoSr0AF23BvCyuH045Pozgiroa-eBC41nXoDXLVApOmHEUNL7PhbLpQ2bF9YgxZcRE1hqDtgJXC61HQYEpOtgM_Y8vZhGYPTHspW9cT4NI_ZkkeQPbVYH2H2bDUbmscc_UuV7Bi-ToiU7DbjqpU/s64/Silver_Medal.webp",
        desc: "",
      },
      元素匯流: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8BEx9dgRdOkG2LIYMqFkbcglF9ywPTwjdYfLgCGW7gM6iPzYj_LU-0otz3sjdhMq1qstdO8eUxM64SmJJ65L8Zw9hgvYCsst6Bb9SrkL4m30j5O5rlBKuc6-lDONa8RE3p60iBQ3BxmC5vWYxtFLoJmelizDS4lcEasHRl-yBdJ2CChaOyoWCaoYauGQ/s64/Elemental_Convergence.webp",
        desc: "【普通效果】：周圍每有一個處於元素異常的敵人，自身元素傷害提升。\n【強化效果】：周圍每有一個處於元素異常的敵人，自身元素傷害與狀態觸發機率雙重提升。",
      },
      元素編織: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0VxxNzNpx4pEFu39CGjqipawB171G4uv0xT109rV_E3nwfdDZ_it44O-szPhpcnnKowsgUqFLd_TLnkjavzr4uqKla-cr15AjSXEr417RfsRO1Uy3ymIpYF4g-8IPF5C_DA0pvix7iJna5KSuZvj7G_VwGWV5xoeJNUxU5zlEvjzY81yGASrg0llTvAw/s64/Elemental_Weave.webp",
        desc: "【普通效果】：切換武器後，接下來3秒內必定觸發元素異常。\n【強化效果】：切換武器後，接下來3秒內必定觸發元素異常，且元素傷害增加50%。",
      },
      生命之源: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgX4mTl09bn-avBgyyzqc7l1w1U6_XY1rU8-H-gSYAiF94gzVgOqa87fFjnEOgIp7Rfs4CRJHceOvgZE7lJta5-X6GLQLAjGZe77NmHmYys07Rf_jOWH6K237mAAJHTMJx7Zd7z-0U2gImJBkYB85PE4XOsJy5UTUVPKwnVoLWWDJlM4FMTzFQSFYdS4nM/s64/Fountain_of_Life.webp",
        desc: "【普通效果】：切換武器後，接下來3秒內必定觸發元素異常。\n【強化效果】：切換武器後，接下來3秒內必定觸發元素異常，且元素傷害增加50%。",
      },
      隨風而動: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhh3O7BKmbzCt8jdMTc6yTN7a5YgFWGxPg30L9xtO5gZTvLCKY8UCrBk1u9jhv-13J2G41t2SYQVCNcS-OeYULt5qpub7ytalDRVSQdL9kCIhAjZ248dng3zhIBmkN1uqKI_87UALy0IQpIfEs9iiqa4xQ3PTKv2hf3PH9qhP6FGAn6v_oC_z-YAmUZels/s64/Flowing_Wind.webp",
        desc: "",
      },
      妙手空空: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgllOhPzTHW0IAvjNslv5N37e3f5OMvZFk9kOs_RA1HEw0_xlAcNE7uZPnAAw32-MLOFl5Yk8XLSHcKXAi6nYIZHkg6xe3TktA8_baSyeDmRqjajgVGh4TR0MmAs7MJE_mZYbp6NWitsQjYGTYrtI7_eAvYMI7EBWOuEXYb5VIYt-dmsdwlABIZMuxy3-c/s64/Deft_Hands.webp",
        desc: "【普通效果】：擊殺敵人後的2秒內，射擊不消耗彈藥。\n【強化效果】：擊殺敵人或摧毀物品後的4秒內，射擊不消耗彈藥。",
      },
      軍火商人: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyZ7RsMcqsHx-z3xp8SwmLatYnB3KR1oA0IOJQ2WD3f88YTmGxDavT9NN_cP2aK0j49vFpQve0riHd4qjhIbZi0_W11zY09WfEae3ROdT3Jlbwh_kABVqzgZBFPAicZ0J5sejj8pAwNPm1iQNvqK7a69jQpqeNFezt-ah95dOcQlMaojxmlTf30PeivLc/s64/Arms_Dealer.webp",
        desc: "",
      },
      魔術懷錶: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWfLjIMMjkc51oqX-tkapz9oCeN-q1tdZQdrTabPQdA8K6tOx1fHUb4OquA0UFPH-l_RGB6kzhFgIaFIUwKQToNo1PQOidGEWjL-naNKYXQZxivGdDxNa-emX7O8rmWkQL-EM11M0o2EPO_CqH5bZkzoMzya2CfFYZpdZ9FWTyoloHlBrRFU-sahuTZ10/s64/Magic_Watch.webp",
        desc: "【普通效果】：使用主要技能或衝刺時，有33%的機率重置其冷卻時間。\n【強化效果】：使用主要技能或衝刺時，有33%的機率重置所有冷卻時間。",
      },
      電磁線圈: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRn2Dszp_VcH6NHbJ_dxrchkgcWuvzNA8lSJy5Rehn5G90eWkhyoc4pKJ_feMR53Z5JsD_0DSjMdzEaaPBM3pTA0DYpaoP_xd8BZjzc610s8pzeyfsPrN0BmL9GfGJ60JROuyDRh6_9L641Y8ciSGhn0yiT56afx7tY-HqQeeWhGEGvVByy1OinQHNKKk/s64/Magnetic_Coil.webp",
        desc: "",
      },
      終焉審判: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCBUBPgSkFxQTn8XwbV26__yWniCVPz8UieLIDFU-pafo_oJYnoVycfUCOHS955eCqIgDUuz0Ls40-I3COWya_j9XOPKrZPs2XXwbOsf08UqjZpen2rDQUzcmfS_Z4N4PCryscymW0NTI5yfFdn30BoO2_vOzpn7LJaORbW6FKesq6lNGnzS8df9LdKFI/s64/Final_Judgment.webp",
        desc: "【普通效果】：武器攻擊可以直接秒殺生命值低於15%（Boss和精英怪為8%）的敵人。\n【強化效果】：武器攻擊可以直接秒殺生命值低於20%（Boss和精英怪為10%）的敵人。",
      },
      荊棘外殼: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvJoWWbRjFRHYjEhnckimY4ZW5a7XjRKamyPtHAOTgn_71kMwLhq7xdtmJgDzBHzdtK7VfrNJfxcjyVTubkP96y0nxm1T1pcRk-kYzGTH6P20ato2zGcY7nEN2kOOUYoEvhyIp3zrKUOsRQaHmm9Hr4rw1y5J-bAi_llDjQa58BXWmku6jyfH01OEcP_Q/s64/Thorny_Carapace.webp",
        desc: "",
      },
      投幣攻擊: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizZnvwpEEsUmM9wFcFb1GBtMyXSSXKA_Yc-NekNnMR7VV6KfwfLizxOlE0pAkoqao0SzSKz2Bpp1qsRvd3_byf-5tKTQKOco2gdHC9yj1suk5AWjoO-NAPKUDSFTC2Fw5C1Lq5YEKIwrPR5fvK788tZjLkaWtVcCmpgcTfzQN1J39vFqyG6pPeHdrz_MU/s64/Coin_Shot.webp",
        desc: "【普通效果】：每次射擊命中敵人，會消耗2枚銅幣使幸運一擊機率增加30%；若觸發幸運一擊，則不消耗銅幣。\n【強化效果】：每次命中敵人會消耗2枚銅幣使武器傷害增加60%；若5次命中內擊殺敵人，則會返還消耗在這個敵人身上的銅幣，若觸發暴擊/幸運一擊/元素異常，則不消耗銅幣。",
      },
      推進裝置: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdTpz7iLxcO4q1B52MF6pfVh1XL7UEhQ-euVKoK_qke8liDbqNatvIPMfwDG4JGxNJblAopp6JZC1Q51vgr_7_unZbqzw9veceIXpBeHRS5V5QFuNniqm749pQoFya8REV5cpVJO7PzkJrwf6AZK4b3bjzPrZmBx08XZYbjIhEIl9qzcT5QdH6MZgDIcE/s64/Propulsion_Device.webp",
        desc: "",
      },
      淘金工人: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsq5ZgD6648byMbII0DRoq2Mz7KG27tUxjSYJ3pq-qUIuVT9LIyIx6O1zrWpCyKR3xSoJpSsApxZH-gmKWk0yUm3s_kgf2z8FupIWSUv1ENP76MFo9cpjUVyNPfIynEdqpP-iuAW3kkGvugDjOrDrlxjPTikoMSWta8sTCT3U7DOdNtbva0IEnb3IBWCo/s64/Copper_Miner.webp",
        desc: "",
      },
      戰場老兵: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5mlezp5vx-6tngup75EsA7mEThHT09Z_5BiDls2YTxf2p3K1qgHe7VatSGUY41_9xsxfMqS9qYOnrULqAg0_E7QuUll8_NsvsOzU298GHLl28KpwGECVlTkImlmlXzjVe2DlezcMmxneZ9DYktdENKYaNhnZDqz97CDK1l3itlsPrPw1Cyp4Qj7lEesA/s64/Veteran.webp",
        desc: "【普通效果】：自身7米內每有1個敵人被擊殺，生命值上限+1。\n【強化效果】：自身7米內每有1個敵人被擊殺，生命值上限+1，護盾/護甲上限+1。",
      },
      精英殺手: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiK5NjDizKmLlB9w7ZpMVpu_H0YNrhLqaVoU1jb6vZFxsW5Pr_Yip1MbDtgWksHl4WYopk7NjzuNYa3lXvfDRxqtjyqyGg_zzbGnQZQtfQi99j1Pg_Vm8g9FBpHCpZvaArFjzm4QcKGHecRPb51PLWYSlC4BegVzlFEKM4wX8pE0TZ5-FL4aImjDEQ7GxY/s64/Elite_Assassin.webp",
        desc: "",
      },
      強化蛋殼: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrmblRkzegcPonxruWuz__NJ9AqNrzIfeabdiahY3E-7qh-PtKKoSWnQ8yYTA2YORZ0RJSyCzUeoxX_bEaB6sXIiDAFWiPNkhdf5vkzIAK9BvyDEPkfvMin4x-QwoGN5_D2KYtYA8hHzRh3lk2oS6uUIDlbn6nRcS3B_XQFYXxTI2lXxTEMzCOupaB7kA/s64/Reinforced_Eggshell.webp",
        desc: "",
      },
      戰術優勢: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhxciMr2i568QBFKawkVusjcpFVwmlwUMD8kmpsMlzPr5eQREOn3jbvIeRMlC1uYFgnPD_xgS-q4QM-bPKUPM2wJpbamYcabWmTY7-A2to_dMwR9Tg8mTfRRV9RHBkos-UiL-VVx3J5SjekC5I5Qbx-vtxJ5EQxSJofyOZA6TfYumqAd5P3Xk9DPL9mtd0/s64/Strategic_Advantage.webp",
        desc: "",
      },
      復原靈龕: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsZJ4S8RdkZ43nvgjOxtHdsPN5y-vJQ9f1ZJnoxUsGitE5yg8dg5SkzepYyDTgEuuLm9p_K6hhJo7bZkq55TSyzrjzEp1GOk9mdL9x4Z7vSoNGnOdONOkKecc6bYrBQhrEzYP6qihvWfBSgthEiIkAPvNy11xdBV6fBNx5pf3gbcJTo57jGZEs4uTscJk/s64/Shrine_of_Recovery.webp",
        desc: "",
      },
      鴕鳥騎士: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg235td6xgKCvG_5AZSk2rMVL3o_8DUV80iS7oOAvXfdPAmpHWlTNCO9RX5pWcg9ONacDwyrG2sLGp6JUx966Q3dY42W8KUrT-5dgqPhnWB05siKaOojbX4BM1fdt_bjVDtnLxqeuvDnZpXqLlcEA6tFd2o1AQlm1rKsGvDm30zmU9qbFrXlS9dL7fSTq8/s64/Ostrich_Rider.webp",
        desc: "",
      },
      火焰之環: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrQT7xOyp97yKQtuK6mOg4ePkrzh4g-2tU_dDVkKi7LBecMA3yWTCQx1Ql8Jigfevl4bEx7dHf3sDQufMDwOiaKHaShAAdGPxjzaqPT6Tw75KDn3qYRdWbDa6FuwK5eyAzyZmNYLLxICtg1-d6Cy_G5mzscCQnNAVDOciXObjwN8wQHjGNDNjvspSdRS4/s64/Blazing_Hoop.webp",
        desc: "",
      },
      腐蝕領域: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQFJYVgLGdLFZHuRt_b-PDysqBs0YEYSBI1z_juaUzVQHmI1EdWOK2vcDNNpepYmCcjDdSE3-sOTVrMdX2GrmBDy4zD5HzsHHHN0IuMrJMw8isdlPwZjU10LJTxJWFshKx4n61UFrZFBuHnLLzkiTBtWeTv91caWjUI2mQpO8Vsdq5bbzq7-fe9ag5iVE/s64/Realm_of_Corrosion.webp",
        desc: "",
      },
      火焰碎片: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0EGaLk9e-yvEc3r86aCI7F8sCl1LmXRxtsjq4Sr4IrVITkmwemOPXC4HtZ4Fhl16vH24Kac1Rj0jdTZuwI6zCRdjCroNXzJ5-WI-aMvX18UhgSzd2aFoEI_f-6oilT5lQd5PBqEnQmatOret7KyJ4PVZ_0SB9hgNBrJBcKI9onLEzNgrbJloCtLtB86o/s64/Flame_Shard.webp",
        desc: "【普通效果】：火焰傷害增加25%，免疫燃燒異常，且處於燃燒異常時，火焰傷害額外增加25%。\n【強化效果】：火焰傷害增加50%，免疫燃燒異常效果。",
      },
      腐蝕碎片: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4BhKXGdUZpIpYxhCym1H69xT2UOQjNC01-Bh_p0TA7OT0kUM5m0x5hiQPsnx-XZXyyitBXBU002PDnYSE2oMbMTQ4BTxC9UFFVpLeBfxvJMMlNZhXRtaKiOy0mbsmXm7rQW_B0zJkvniGei6mFHsbiUBHoivGQ01849Axhr40fK-nyJjBelzEf9hRhlc/s64/Corrosion_Shard.webp",
        desc: "【普通效果】：腐蝕傷害增加25%，免疫腐化異常，且處於腐化異常時，腐蝕傷害額外增加25%。\n【強化效果】：腐蝕傷害增加50%，免疫腐化異常效果。",
      },
      雷電碎片: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQlSwqgZs5Me2zn70IojvX4WSR6JhK7krClKwLytL_rootgDwFZilGTuLRdHwLpIlLnFmi2h-CdskWByUu39sHU-2ZRtghse2EoVveYqNMMA1803wLbPQNSzVVMY5O3bkV0CePGg_YcH_WrZQ9RAq7fPUsKm5U96-ONrEvJi3X6UgjCkYWzn4vr5fTpGA/s64/Lightning_Shard.webp",
        desc: "【普通效果】：雷電傷害增加25%，免疫電擊異常，且處於電擊異常時，雷電傷害額外增加25%。\n【強化效果】：雷電傷害增加50%，免疫電擊異常效果。",
      },
      安全氣囊: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTwXy03YmfoabVv2lIos6Nbk_VE2MPxERkQiFXynN1EvG0VjT4abAvuu1ag6VuI6OcBFnoQNUXhDmoVeW5m5aVBgljHmViHaq84Nek2tBqsJXRyqxfNZXydcwxie5hU9UjHjzFRxYDvu5mp99B7vftO7KT7f0XA7PVW3gqutGDIP7X6gYPtDNqw5rD5AI/s64/Airbag.webp",
        desc: "【普通效果】：護盾/護甲滿時，每秒流失2%最大生命值。護盾/護甲破碎時，立刻回復100%最大生命值。\n【強化效果】：護盾/護甲滿時不再流失生命值。護盾/護甲破碎時，立刻回復100%最大生命值。",
      },
      事功各半: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJ1ZsK6BB3vLsbq3VhAx0IW3HHMUGU7B4Z0jH9KdTJ3FEbcGXX4OfSPbuumWNSXBo52YS_2aWe3gV4kdolW5l1gQmhidasFPjWUFReJ-rvRGNxKDUe8Z-DnSL4h5lPwDYPpPeL6mCA1i6DBvfewGYPcQbqn3FmBP25Un4N_F7VQyJFNoSDu4qkCuot_FQ/s64/Untold_Effort.webp",
        desc: "",
      },
      亡羊補牢: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRgzI6sZK7mZO2eZtypCdKFD1pNjP08qTqB8A1DKiY4YugMspdscIuTt5jzHBiglyUBkIw2I3I8FWUP_M8UF1253ZHC4begb2YKML4f0Canijg7BvGpqlOwXKmNH6X7fpcHROh67s5gyMzoXG3rk5_qVuYhOX_2iEGVnWXiquadpbuULHAa1mAbU83G6o/s64/Safety_Measures.webp",
        desc: "",
      },
      神行太保: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxImWddyU-Cq0H9AEsoUJf6TH4A0dRr_LMpvjEu3YcwvjHAYkprjEWfw8vaxREB5paeIq6KdQXHl8IddVxZ4TTbmvrPXOrppRW91EVA4mGLnRb_JgtTrUSCbyzpTrm4IuW3_uAOoLTu8nWSQnXZXJrM8sNCM9GaFpCMFC_mTUFL3DUKO7cAoMKpiacI_8/s64/Windrider.webp",
        desc: "",
      },
      能力透支: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_t3B_Z-Vpk_9yT-OUjRgJrR_MBEnWaMA3FjHgoX91p4g0GZgrmyvzB7eojqvSgDLD1GkM91dT1indqPC52siynQrrvzDsBCZ0wsHYTAycDZSC_gmbuCmNlIa18CKToAtsEVubbrUCYwhg6mxJ2AT4GQ1Se4ERI2Uw0mPHLlSSCRntK2YBSY0BxZDBxco/s64/Capacity_Overdraft.webp",
        desc: "【普通效果】：次要技能的使用次數耗盡時，可以消耗生命值來施放次要技能。\n【強化效果】：次要技能的使用次數耗盡時，可以消耗較少的生命值來施放次要技能，且技能傷害提升。",
      },
      餘彈之輝: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6mUxsg98PVQikBxO0LIk_e48TzTzEfttcJuVlZN6GB2BIjpvjTvFyfulm433TLQd29YaSLggVhmmShwpnAq7MGLj8D5EmwBIiv3mcxzv6j0l1ncwk9tiDGnkTyYqLHEGU0J9R_2sQeRlHqXYb-qp3jnWQK8Z_fbeNqSs4qGCtdkQqvnLMG5A9yjC-Rt0/s64/Dormant_Bullet.webp",
        desc: "【普通效果】：次要技能的使用次數耗盡時，可以消耗生命值來施放次要技能。\n【強化效果】：次要技能的使用次數耗盡時，可以消耗較少的生命值來施放次要技能，且技能傷害提升。",
      },
      步步驚雷: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0PrkCx1fTh8HjCP8dzHn0TzLxRUaX3Wf_oARkKG6nYQRSJ-Pwj1NO2_OYkb-m8kmS-R-vorjRJaaUjYXAFFkJ5mlVYR3tzp9ytOt5bmBPSOUaq9HNelfZN2RIWeBsUgaV9hW6keQVMBA_eMgX3sxRSN3jE7czt09sXLlP05c6qp-gjUyJkDNUuIdjQhw/s64/Thunder_Step.webp",
        desc: "【普通效果】：使用衝刺技能後，在原地釋放一道雷電，造成傷害並短暫禁錮敵人。\n【強化效果】：使用衝刺技能後，對25米範圍內最近的3個敵人各釋放一道雷電，造成傷害並短暫禁錮敵人。",
      },
      爆破子彈: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnwaT2zffvRGhTAqng0HQGps0deAAO1qzAFCOXsr0huU6b6lLmTG3fsQ1eN7Gtka9SKzzpyJICFRAK4OQpBaEzuJP5e9gbjb7in-_jLCuYb4uOdBX50TuTk6KDwQnAiIElH1Tl1dG3QRhvIbCdG0eLsH6Pw8qtZfrNPhnmffqIjC8c8uPz53RvvkpcKYA/s64/Explosive_Bullets.webp",
        desc: "【普通效果】：使用衝刺技能後，在原地釋放一道雷電，造成傷害並短暫禁錮敵人。\n【強化效果】：使用衝刺技能後，對25米範圍內最近的3個敵人各釋放一道雷電，造成傷害並短暫禁錮敵人。",
      },
      防彈痂殼: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiC3WiYS77JZg8TvUhjENYd_GW_P5g5a0ILN2aAz7risa1bsohYPJHLqVvzZyJ76d6szWHNOxIbxe06-AnkSN3-5cGs0soKr4OAHez0vB0nXLFBIWxteaxKsDaw3yvIPPZd1yZ07E2o2v8K9dabiD7pQgbn_Tx48iQQK6VS3rlWzDnozd4KBWc9KXp8Q2g/s64/Fight_for_Immortality.webp",
        desc: "【普通效果】：受到傷害後，將此次傷害轉化為護盾/護甲上限，持續12秒（冷卻時間45秒）。\n【強化效果】：受到傷害後，將此次傷害轉化為護盾/護甲上限，持續12秒（冷卻時間30秒）。",
      },
      幕後交易: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTWWTYAFvZqGgCMbyDX-dZQSCWbVaVI_jzX1_XJ3oPKi26ayThfye-yyzaxUeXVKEF2Z-QU2pN5PpyR4Pk-j3CdapCeZwvH5nX_lgZ5SmxDJqFj7GOz5hBsDUeW4RSMYlFCY1-2_wajDtHUr-8ILYbDmZreFDO5k7xdcehxkxwLYNgft-PnXpm8ivvX4o/s64/Hidden_Transaction.webp",
        desc: "【普通效果】：在工匠處強化武器時，有33%的機率使強化等級額外+1。\n【強化效果】：在工匠處強化武器時，有50%的機率使強化等級額外+1。",
      },
      交叉火力: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCfbIOO2RxtLuN2Cpx_Zq4GdMbPH3Kg-x9NOI3A3_htfRJv5GD0eNs8o1GQrxwvG4enQg1bDV3H1IX-PvBuls7F0CZjS3q3KXfViNJjmlHViHmkEAaZ5hfx4eZLXDvltc2kUT7_AoDfxDdWO0lt9nBpAnejkG3B8H571wK-M4MarAyH9s1pkec9Z0G5rY/s64/Terrific_Crossfire.webp",
        desc: "",
      },
      意外過載: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0tGESVZV3X7a4IGl2RB6UyM3-a82mPcUwYBemPzVy2AvOF9sXyYj8imqAXB5rbzdAI0QABwuw12Uga37LxURrdye6TRkZwq86qDHWF36tBwgKrp2wx5tLPNirXrJB_QmtZ92SN3Hfd13ghAC6X5fzNWo54rHa5xI9WigujjL9s0d8mhTKJn8Id1XQzko/s64/Brutal_Gloves.webp",
        desc: "有機率增加技能傷害",
      },
      來者不拒: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjoHhUFh8efmXoxqkhlk2B8bLB1-kY-qvD4LAWiTIXLfuh7jy0BMNvgIiZGHKsq93bnPXtVgLJr8JvrsUCtB3YInrLOUOY2Jm1mXp3XQA_huTIk44oysK-VcrY1vOjyERK2ADbGzzPhV5D3rPJPNZj6FTV5F2WPOl3TELKOc_xm_G_nOTL4g8Q9Y1V5Tto/s64/Take_It_All.webp",
        desc: "",
      },
      貨如輪轉: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYvOIKUVovZg_ApZngBleMlpF0cDvx1bAPjT0FILvmIGVIz6XmCko9E2iQpQ57XaIEHZcTAV8ztlYGmVefTrgL6HXPxGfzf7TelBZvW522loZ4taib7Pb8jfu0KgH1kfjaV-e2nTqSZisOzQ5ySpC1rtqLi4n3awn-v4DqSO4mUAYKtFU-izJXWaEoiIA/s64/Refresh_Addict.webp",
        desc: "",
      },
      陳年沙漏: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuTPKhxyKZsqJ1U9o-TisFzmgbZx-33JjeInmXibh87LHE-3fBZQB-VHXb_pZ7aq-B8fGTY5GXHX0zB7UdxbIfc2CGH1sLLbuikYpCo61dADi33hzyBFfqRaXETr5xghMCHh6EtDlUbVfRyr2-42-oxXesIA_FQc3YIFl2cUBj1jxlPyizy64vm1MBWCo/s64/Ancient_Timer.webp",
        desc: "【普通效果】：主要技能的冷卻時間減少50%，但次要技能會有3秒的冷卻時間。\n【強化效果】：主要技能的冷卻時間減少50%。",
      },
      琉璃瞄具: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7fq8DaMRNf7STQWgjvhrkD6rh5R2cbVYg8wAlR421Vk4EKtq1TRr-vmHSzm8hnWEqaS-4A_xoXhtteXh_avIWl7rZO2AvGangtqDdH1tMICA1KY5l2pkNg68jRSxQcCMcjLLdM27rnFnpiXwyWwztO8e1gae0cu6X9HAdwJSnVoD8cuRlSrLPUpgMelo/s64/Glazed_Sight.webp",
        desc: "【普通效果】：所有武器的暴擊倍率+1.5x，但生命值受到50次怪物傷害後，變為所有武器的暴擊倍率+0.5x（不可丟棄）。\n【強化效果】：所有武器的暴擊倍率+0.5x，且每擁有10%的生命總值，暴擊倍率額外+0.1x。",
      },
      理性消費: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJXsz4M73mEteL1FAcuhedmB_AydF-bvZMONKuOWbYG9BYLvS4eMZ9Giu6MtSVb58g0pTTnj0XMaqBt9jQIbLMTjFXSrfk1FFfBkcJfBVqZ3Vgnpcdr4coqrTWIxppuJe7KcAuyiMtsRuUlS5wJVdn_mOzdn7UukFUiYw25ObWM9Oj4H5Z7s79U0sAPSk/s64/Rational_Consumption.webp",
        desc: "【普通效果】：技能傷害增加80%。每在行腳商處購買一次商品，技能傷害減少5%（不會低於0%，不可丟棄）。\n【強化效果】：技能傷害增加80%。每與行腳商交互一次，技能傷害增加10%；每購買一次商品，技能傷害減少5%（不會低於0%，不可丟棄）。",
      },
      涅槃之力: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggS1OuVvkn2UMuErHhJ9H00E3FG3x4bg_9WZZFsSQiZVtZIBuZmZ45UQDYc-4wIyoomk2AlM33wUv0qGrGMqmWXStRWWjuKtyKyqMC2ZUZqpyCcf4ugtx3e8nUQt4Lk5HUTOpH1zRpykzgLPHP3TfHKvT6tul6r3xgzw04YolROJvPLZB8OAvtQLz8DVw/s64/Nirvana_Force.webp",
        desc: "",
      },
      順水推舟: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9-zCgL6eNsNeu2dGeZ3zkYUzro4CpA4L_EMM61W1Vq9SK0D6Zc7m1vVhc-z_VJleJKTS2-B8OZOGZfLMKZMM-r69a76jR0vcnQDjgFSEG2zEOPIvdlK83pcRFCup-FJZVvhJ7j8lC8LLhzh07hSedYa05O-WoVBQACyA1GOBZGqs-82mrnqA_CzgGagU/s64/Concurrent_Cooldown.webp",
        desc: "",
      },
      水滿則溢: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0OFEz_paEnR_5JRQglopmMv7k2KRE4xQr1ldGUMWzyxm_H_ijB6e1moVPMw-lXJYjzsoQ9j92jSUNROoQKEa9daUyggqV3kkYdYdWuRyeqv0QGVwaEjEIuKFx15kTbDJXtgYYInyHkz4IyAQlsbWOc2F0esUHGOCcmvY0gpnexgn0Xl4GJKuOGo2Fcxo/s64/Overflowing_Waters.webp",
        desc: "",
      },
      塞翁失馬: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3s19d7Wsq-_cgFNALuATv1gkW40H81YQePJw5YY11ey89epkJLmgHAJohLxjkgAMkfEm8QBimHhGniJdFM5aL2SMvH6N-82TX9UYJ_of_aqQ44zPSemjKelEWoyjYK1Uh3nRRn2dcAPtdnlAC2rJgMtuuE6QWUb-6G7UapKcaHRQX0yr7Q68y3Mx_V7w/s64/Blessing_in_Disguise.webp",
        desc: "",
      },
      幸運輪盤: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDmQUcRKCNHPVP9PXkKfH1vWad45vT2nRH7VgB1Al1b3tpTC4iXR-EaSuE1v-fKNOn63yon-wWLo-OFsZqgi2b__8TVdeyB2CzrLAZJ_qR2UX1WWQBD3F115MK0RfTvTN42kQxvYk06MhL0VKVRJM-5iU-U7T_Aaju3M-ES1UFNYzxRtKztGMVaSPe06E/s64/Lucky_Roulette.webp",
        desc: "",
      },
      慑敵之威: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_71v-oW0X55khdJBNaO3zApSftlKDdaK4FKQ8rmhkTqh58WxvLmlzmiFyPketijLYOEsKcG3ZqbZYSfklL_yCw3VJZUe1_N20oi9hKb84fdSwjuuCTHN1lwlj9St9Z06AJ-vybP96uSp7UV5icGNrPgcX51GwR9G6cAcnY4MYdVHNzmlh4ZQwhO0MOKU/s64/Intimidating_Presence.webp",
        desc: "",
      },
      爆破彈夾: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1akehdBr2Z9jYo-kzYkldyT-VaU5u0kGVIC7sSFV891jZM0ROhDTk8ymvgiBkMRcT_vxtcuDxZMahzXzmOKpv3lo6FqWcC0rtKMKOZWp2CKutvqDzixTMxwgGihPDGfxSdKQ16VST3Ys2ZVz3xn3kedAXMq_p8xQvHJW-u76r2JmkX_cDZb6gt4K8jZM/s64/Explosive_Magazine.webp",
        desc: "",
      },
      神兵聚能: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj92f2eh3odpsITaiS4lfqYCxrDSA9rCl7IdwBl-tOT_zJzehyphenhyphen76qwqQjETy_qkUydllc1h_hpm4KJbT8Ji-72ZJbcQaPik79mICvI9cvsA3bspJiXH-BseHMUh3fPLhA6FID_Okc1qM7IDHUGIHV4CAxZYNreGZ8lAQm93OJxcduzV2H87e_vFVbkO71M/s64/Divine_Energy.webp",
        desc: "",
      },
      富貴在天: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZu3JlioQW-e_EgudnOxBdBa7yKs-5TgygUtDEiq4ngXlXz-dpIWPcXKSbe79ymdkdr_FtrJ24fmPEZ68tDzdosg9MR23zV2m6wZ9GqFymQP5AcJHfcbFRJNuw59IfKExrhf-aZXBCXIGHpWXnoeoZbHb8hXEE2h22b1RsJ-Sh15WcbH7dquoaUq1EjHk/s64/Fortune_Challenge.webp",
        desc: "",
      },
      趁勢而為: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTb6DHaLw4SUgpggnADsA9m5nLkIo7l4DlbD5Fc9Jg8fk7IS9eEonBQ8bAUJtxBd9NV7hUjCtKLYSiT1DPEtGUxwS_rpPqwlFoYoOf-0Ei5oymDWWbJrXR81753T1iei2GHai-ypP6KGGhK83O6uQtn1NcM2I-smfyJQi8aFRZlObGwEdmG8mPpxrZiGw/s64/Energy_Transfer.webp",
        desc: "",
      },
      否極泰來: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisH3RlFcAZwbuiAT0JjJwkbHJb4hApvrULuIvFkfceJVaACOe5iBgao1buQ-t-wzxsdJ81cLAJcuVW-SiuHr3Fw-f0U6xR_2RDjzykt0Df1vv2mFrMBcesA09aU320MUebC7r_GNQNJJh2RGRXIwg-mmp1Ad3qGPmwwk6danWHt1Ld0cIwV4XzfiGxspI/s64/Reascend.webp",
        desc: "",
      },
      順手牽羊: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhl9cFAz2L7wry_exq9GDVfJDULBxCmO2squLbWzwKymThBMWTkIn3gZHIWJKUO8T6g9Ya0ePf3OYA6Tg4g-iLL5LjmKeCdoYCkt3umY1DvJKLLH1bihnI6QwKN2AxHBCyQc8agbohMUPcSdmus1f1bkQu45XLY9sDH4erXjkcMWd7iqu3PkjKyFugA9a4/s64/Greedy_Choice.webp",
        desc: "",
      },
      愈行愈速: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6300JDqSmmymRMLMRZE2qfUXYPi8NF7ZcUZUSsgUXJZur4b5Otvk-Ghu3QIVHvWKWvGMDA7hGatOTNBmJWPV1u2pBdLEjTQecue13-a-bmwGGnopBenYCZM4rNhquxPE0rrR6WFViiUAvoAjKC_nFSEzrCu0T3T8COLg3Iv1lSCXQ7y3pK5YAIxc9VoQ/s64/Speedy_Traveler.webp",
        desc: "",
      },
      爭分奪秒: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhESXGHFWUEJMdcuAc7UYP-zNZuH2WscLZL_GreNuBCF4koyXeuMcWmVN0qb01AA27NVPDXi2ajSQnXt3mXC8JC4k_57NlOXIrUBafUG7i1xGdK4slB-BCqLT2n6ToUUDjv-HT5gCiJZoEKB-ymkR-96BhFNwQlBINoBPrfFvTjKUppD0hUn673lGxMGTc/s64/Rampage_Time.webp",
        desc: "",
      },
      大飽口福: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7kWMnAmdoQcmLrtylrZvSErwlVoFYjOcIuLQxUES1yYP7wSbcNsKcEfrvkuVBT-RoEiV3X5EzMb17x5uVNsEy8WdE12kIi8CiSOxav6XNCloF3FWqjH4j2fSQsJ7lAKevrSK6GVzR9c-KQOHjgnb1FPnYO4yynfrCIM0CwymOLmm960sgl3tcdmbq1vM/s64/Big_Eater.webp",
        desc: "",
      },
      惡咒退散: {
        tier: "rare",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-gxZ2e1iqURhk-l9SFuxuJ8d9JAkB3wnxeTx0nEhSZtbgvRiqkuvNk74u4yx2fZKFs4Myss6yzph44XOUfcm2aESVf2Btc5nM769WfFooaAQ17G5tSMx6I7-hGI2SZB8epkDnlpSZpgtPWLSga1n3z1raojaF8qWA-t8Xu8-idNfLeqE8IN03fJ4qXDs/s64/Curse_Away.webp",
        desc: "",
      },
      //金色
      偏折護盾: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOjskQ-_9N43gr9cCNILG6-L9js5VdNtqXq2fQzPkR3_fhPTKBzcNFn6cneK-Na7xBGhhSa3p54EWFyyd9K6rTOLbVgtY4lOfINbhhuSlC_Bsvx8IowBFCYli7n1PjRPIHdpXreZ7Ib9jgIx_3eLBszJgCX4wpRb2-sjFrqgPXRPXDakvEWKOGXGrxrGs/s64/Deflection_Shield.webp",
        desc: "【普通效果】：受到來自15米外的傷害減少90%，受到來自15米內的傷害增加90%。\n【強化效果】：手持1號位武器時，受到來自15米外的傷害減少90%，受到來自15米內的傷害增加90%；手持2號位武器時，受到來自15米內的傷害減少90%，受到來自15米外的傷害增加90%。",
      },
      元素奧能: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiaQ23KtcXti8kC4YcIjbqMpLs_DKKo6AD40RwOehnlsSfEHMjdMrwkgmb_EAVV7ZHrxgylXcjJOmUgCJWQqjqpVjrkHRmIQ-9z7jtwYkWuqgdVR_reg99IGSlIjYOmO42tPUVp4rSIP44OZvvKmEYv-37ZYLJG5ErGZdnRJ3ck4r997x4GyQkFjEE6Hk/s64/Elemental_Power.webp",
        desc: "【普通效果】：元素傷害增加25%；觸發元素異常時，會將元素異常擴散給目標附近的一個隨機敵人。\n【強化效果】：元素傷害增加25%；觸發元素異常時，會將元素異常擴散給目標周圍5米範圍的所有敵人。",
      },
      鷹眼瞄具: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRLKnMkU8HQoBohyphenhyphenAtuH7UZ6GL-DjFp2PZdEQtW5W0b4_vH2x2dN9D6WDf1LMh4hv52EC-hWxRz5kNU206b7jpRoftYn-cbklvzNYO3ocEDb6EfOonyrHaXnkfoEbjiViRJBOZfLQghzCTtXyeaCi8wAdfeHrx4NgtHlpAepMCDfCqAs3118w5nB8sp-Y/s64/Hawkeye_Sight.webp",
        desc: "",
      },
      陰陽魔鏡: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMgdKa_C4ovQptrz9nUyBnaXrfA1JF3I6Qb1W2r2lInmBSb8Rsc-LEjmcwYAbjWjdQyPi4vQM93vsqWantLJXnaTDnhNQ6_JdQev291lPmWBqD2Zd1xPKY5M4vk3wS8SSMPTgT_hdnN1WWwT6GMISDJNkMsqE1BFVrdLYv9jahw2AP4tnGuW0eaM-IhqE/s64/Mystic_Mirror.webp",
        desc: "",
      },
      雙刃之劍: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_Pl0UjGppMZe3rOjBnRPlXtFsHbYasKLCtKpZUZQ0WT6pQGmTZwP-yrEICYWP8UvzhfMmrXzjegV_6n0NKp8jyu5Wh_uY2LRRNwovF1smc4SOumbsRepRK49O1sd8iiahQvLtza41iK44P9kZJf_Hv3r3p4K39UUxCPZdSCZcOqavHgXsywqozCXUNT8/s64/Dual-edge.webp",
        desc: "",
      },
      絕地反擊: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgf_ddZXVaPPohUfFmrdljAie18Ties0CuhxgxcElTaLzORz4NUw9TTB8NaUBXsx4dAMUPxCacjlBh-D34LSfE8M2pLNZNIQ7rNq-hWUGOdiXyWfVd8qW3Hbf6Mv6OP2eqA3JITratYTfosrmp8zq1OvP27a-PRoA6Ib1cbCvT1To6vjVd-_u329nTgul0/s64/Deadly_Counter.webp",
        desc: "",
      },
      金質徽章: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi50SDQrHqN2PLkTY2XpTQJh2Aaot8fN9mcGaYv-2QtMDJp9Z-_mNVnXTTHKWuisK-Ylh4CSHtvorF0KilthFlkHcOWJHZlQ4mWaLZIyMwS7h5pm4kR7cOJrXCW8x-mRdhNsl3c65LwNOfjnObEo2mq4yoVKILZ9DfK1MFAyHYlOEoDdpM-9spDbd_wqpY/s64/Gold_Medal.webp",
        desc: "",
      },
      靈貓九命: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifTgOJ_PGWbcVQTGw4xlJ9d7l8z3lYGonDkJec4xb9PbQ0_nPBTPF3vePUn4XYjm1U2LkQd09m6MUJFzBxltCTM9IwFdHX_F4Kvx4SbrbJZbSzbMfsylXz2x7146LPwIXW9gHDxhrx3cjfKQ_-A5a5M8nX1FZbYsy2e8CO8TXA2Unct4_EFVcsMbfH7cI/s64/Spirit_Feline.webp",
        desc: "",
      },
      厄運詛咒: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzMSJsNsEzfed5KIsALmuK8Fkn_fiTRqMqtQopkIcEZ-MssxQN5vINxH_04Nd47rbjGsjc7ElLKL_bxr-4sd-G3WjCa-Etulj9OG3qhSPD9GS3hvJ0mCZkgRAzmqr7jYhS0vqcLh7YKmTCvq60N5DbYaSZyS7hW3fdtuKgd7_X-qHQVex5dZwUibKvQsM/s64/Deadly_Curse.webp",
        desc: "",
      },
      穿甲子彈: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip1XidoPlPZ0q-Q9cvTlaIyZjK4NKd8uLZk_JGUGLrQTRd1PwT-VO-6AhXQGzcHB7snOJ0IXguJ4Q76eRwvFI9SkfszCXnfrVZtmc0lKJtAfbh3IpkWQuYDYKGj1iK83nAJ6BZHMbfk9H7w5_uyd4rWLHu_RZszARcJaKFEhjZ0qIAhUu3yaHEAtfaT2c/s64/Penetration_Bullet.webp",
        desc: "",
      },
      為所欲為: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYw2D24_9vGkfN7Jp0aR0Z3AH7StEeOo-TtTKFNIFzEyQ4OJf6hpmk3glW0Yq2FWOyaNRd_niaa-c7m6yrJUsNjJs50XYGpzH0jsFKIvgNzr0YFF2r8-Y5dQJdSUB34-GcrDhHrrINvn3-BpmCkt3XYn_VOODfjyBF4X9nUxl9EnWNfoXC1jYVLZ99MEA/s64/Unfettered_Will.webp",
        desc: "",
      },
      無光之盾: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3Ij7UVUFFr4q9zWSxoFrVEhzHPD3YimkQMb9wIa4o7cRT0fSXX8nEAz2Kq6rHrTG7euqklljF5elQEzxEzbDwgbdAQiA3j0GY3VlaWRyXB_AZsM2iLzuae6lg5qX7juGjT0Vkb7fHhJWkMAg8wfYCHsnT-uCZPheCuT6BIdqQXA1vImuU1VazzgLt25I/s64/Lightless_Shield.webp",
        desc: "",
      },
      幽魂皮膚: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZ_XPXzR7snisns-hG2aPKVaeHeNVHtv1eXVS5NN7u0RJZBURHDX3L5Nq-pJPntzypX0dOUwbsMccoL3ewkQrhFCMWbjxuwkae1bBiLRMBm3gjAK_OjVB1fJRqlsrH37f3R9CDmHEqanoGgwdJ0obL2Zb_QErzts_0znkV4VBji_Vbk-uX3wyYzC7DkF8/s64/Phantom_Skin.webp",
        desc: "",
      },
      時光如水: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgs_dkgMTdooye5hzaCXUwqnvcMroX3qQb5s5a86yZQ5RQEBcyXVx6vuDi16RkxasUdy4fhMAJXgwd3rH4yQ9RP-k4LIaINUpjudzMOVOu7OXqjYAhztJTHvUHxXv7guN6O13AuCJBYLp4wDJPONqZXVe9jmjoSr5iwtYA6S1azsKUrRj-Pzj3XMMAg6a0/s64/Flowing_Time.webp",
        desc: "",
      },
      高級彈庫: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWneuwsfO3DaLIGxCME-bRJWU8aVi0bPN5ts2ZYFPOP-tQ0X3pq5GGW1zSTZSbbRp9xLFitI-tMTpfsJovCLH_YAnoEaX9YcRHVRDzpkn538ZyS5dMz1ZhwuwKvGJMjnve7Gf1XG1NDVs6vUoQ0cKHm7qv0sllFZiiQMiMAD7MTctkf9uocPT5rFMdnHM/s64/Advanced_Depot.webp",
        desc: "",
      },
      疾速追殺: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEYozOIBYfA5Q9uQIkaxMXkiAryRP8eosmql66T5lV8hhwK80XGiJIgGMYxHyZgNC5K7lm6GxFnutg4O6SxvLE7jfI6PH3iOvpCAhAazfd1-_fvAFHbBdOTgG_hcudWf44jxFNZaiY2qtbj9AwUKeL5LtZdhIjxiDQkZYcpbBGI3ehgSqTIVEMJDAfPJ0/s64/Speedy_Pursuit.webp",
        desc: "",
      },
      無情打擊: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTgKAuVqbPTtot_7SsbKcjNJzdVo0_JOcwIE8tcaMbcay1pSyZtNZnafi6Lp6koavPjv3kZn2mgCPjRH1nv0QjaMZxjcYLTk4oaGS_NUxqUjvgGGLUSQNgkt7rwgh45odGKoN_P6xPA5vhertgmDDj5mjAR5dCN069S6f1pDnEzeRRf8uZeSDvNWkNe8w/s64/Merciless_Strike.webp",
        desc: "",
      },
      驅邪護符: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCZWGuxaBX8H8xohyphenhyphenwFmwccl7X8ikiFZ54Y3Z6GdwcbhMwHSdnmqNMOtUesozO3e5MnfuDExVVW-VqOUql4rZKSPo49UHqy-2-lte_8PWMs-Uj-3YmFu8RB6EPqJ5y3QAw0gz3SLFOvF0DAcKRJLPab6X3-pRu7DbjoaolDJliVtCR92kq0SzUFPssGrc/s64/Evil-Banishing_Talisman.webp",
        desc: "【普通效果】：免疫所有詛咒秘卷的負面效果。\n【強化效果】：免疫所有詛咒秘卷的負面效果，且可以丟棄詛咒秘卷。",
      },
      鬥版重盾: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQ5yVAhjbIRHV-oZqcoQXpO0qAW9PgD-3UdT-avN-3dRh6d4g-iuqNL5oAEQROf2AYHkaBCTHSUQL6ZY87KMxxPAyOeoENUvr22-LaFaiUx1_x_tmuVwy70laRx9dAQQtF93SR3h2O2FzTzMPywk3Zzyfk1J92fzgAZvZEpZSSCU04Lb1DLqks2HLiwNs/s64/Heavy_Shield.webp",
        desc: "",
      },
      備用護盾: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjM8WtVanwob-LMyXqzNjmSzMBsLg7dcYrN3LTTvEBnGOsYDBe-UpkNIaeRSRuskJ4g2VFdYjENjbyrRCzFFR5NTzUnf7VE_D-kRNOnBLs8UmyL47HCeKS5OQsYRzmdIzvKAamX8ixnr-oRW1ZFnC63ykhthsnIzeOub549t79kU0n12FkP6RC-qHhzX0E/s64/Backup_Shield.webp",
        desc: "",
      },
      無情連擊: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiT1BETUZjIIV401aDgDj91yo5ierX6bcbs-eRJ7Bpf7vHYQQX_kfjL2Ov7UgOMoDTPwqiJCaZa9oRaD606-hUZ3IXR6jsxKZkhRL5315m6CdZf48ec7rZwvwu-Vu0LpNxOyj7-jQ0-RTrd_K7DXLmUabKk411-IB2tBhmadOm-5AD9fmFMWfZ4-4csb0s/s64/Merciless_Combo.webp",
        desc: "",
      },
      福無雙至: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSEq6I3hikSuL7Vdq064Z1tvDXV5Q-pepVxLiDXNndgWxRotpOo_ig2L4AOsey0pPy6E0wHxJ0IcHjxVsFPyOrA26hY5o9TtQ25waqR3iesSmm9poIcY8FVaMZPUpdH0k24o7nX6S4X9kU6sO2N5VtLqiA9Ttxk3_1m5zO4-aSFxtCwn6pkj31jMLnWDM/s64/Fish_or_Bear_Paw.webp",
        desc: "",
      },
      儲能核心: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigxpffT8FtwQ61EWcWNORN641U5rHJbG1ThUith2idnDSSNSb1OTENKMwHdYpViDykHE0Z8RQJajMkQnO-biO-GNZbQrs9wx2ZS4ORluAAK_DB0gviAQCRSIzwiCQTKW5wfatCLDF-Oy-h_cAdBVs2XJQ4Fjjo1yaBORU7VT06qnu4msEEYrs_F_Rx98k/s64/Energy_Storage.webp",
        desc: "",
      },
      石化皮膚: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfMiTjm8cBhbxiMsp00HRzmUX_tn5Fs_OMw_vMfUnCgYZM6mt4msQax4Q1S73p529vMVx6ZF4DmWAD_MmlU_oMqyzThUPGVfb_zxRUcUTxf9NtthgOELeiKnqNgMR28HD-7-yr19r0d4P62_05QYAa1PP6M8kAfR4x8Ggd2pLp9t2mA5UatGUCkbGrMEg/s64/Stone_Skin.webp",
        desc: "",
      },
      高級會員: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8cuMtS2Q59uIdtz6jdCiMcHxs5N1A4Bfs01HqkJwMVRnScm1654xAvQQVOu9n09iOphGgiKBCOhsHapSJwEEyib8TIHVdNPrk97v7XqIR5zAyGuzVOhAqepHg1rtsjB9OnDgs_GZUR6knw6qfF5VobNZ_SmFTWE9qr6BepGw_5L77AjmcwumV_mNVCpE/s64/Premium_Membership.webp",
        desc: "",
      },
      靈蘊寶典: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5iPInQIJ9tLAEt_Y7d-SnA7w-fOxVtn6KlKbxY5piOXfdC_5Ovy68WznqFQHM0bK0NxvLE03HhSixKEDvKlndaAtPvgHpgeqDtXlqTxj6kRXTJi44jeIdjTpidpfDVR8sNVdeQyIRpodXko21_4FX80PG1_iD9L5QMaCvusJOCHGSS4AdCaGGQagKieY/s64/Spirit_Bible.webp",
        desc: "",
      },
      元素彈夾: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgg43JHabpcDvbugpnTt0VRwyanH1tel_2EoKOKOicrA_Nhs6wf3w68jhTjolaNvVUc0pG4m2bQJDKuI1z1Ohp46RHz1QODsKWOXKBEBThqxMmMJ4R39vHVxDF3IEOhkP9VdCW0gW8gWXQTN2cWDilcHmVaJSqfgtsbo8egsMpc59R14_yTIp1ldkHLjsU/s64/Elemental_Magazine.webp",
        desc: "",
      },
      合理幸運: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEcmOwynxSjtIMBPCZQGurf8Ab1_ZTMc0VsSvW_Ac5f-qB84VaZOlrLDH6WQEeQY2sMJN2CEn2gOVB3tbAFOD7RdKvFDhQEU2X5hYUT20LidHk8TPp0rIqE1NGqAm2aF0EWgt5yujt1XQhb-2ACYhe_RnkGuy2jFYjyWJmOpluATJ7GzIHKKuACm51Erk/s64/Reasonable_Luck.webp",
        desc: "",
      },
      貴氣凌人: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgR4TtL-uf0I-h6DX4YAgnvEr3XXBrJ4e6rbGd7tJCph1yVNKEiOstL13CRx6C_bUoC1SlONnMU3D8zsBu6Y1-By4wHewKWs7OPJh-LGj6DYbTwUJyLmvrlbKGnyNOnamCM4RkqCz8MC7J6LvA11uIsTex7xub0t2RIZJBONfK2rVfXyRyHSnsxnxDAYyE/s64/Rich%2527s_Privileges.webp",
        desc: "",
      },
      湧能護盾: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqb3cLtAZ-q1YtKNgZXhB-AdM9ep150a7mb72M-TIVbXFbgqnONjsn1j2ifO-JP9FptmXOSRlz2JIyP5pzztW4w9VoRNc77gV1tJyAdsb4F1OmwnrP2Z4_d1AgiVU1M8nqwKQBF8yDXwKf4nmtcQKoOAtAX8LwNyxV8irkXfS0Mojnv2k7BGkS9Eiw2Qg/s64/Overwhelming_Shield.webp",
        desc: "",
      },
      拋磚引玉: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQMh8bqp8gldcKvxC1Jee5vMVzg69zrBMQYctwDbJlx1q7YQPI7Xra3S84GpNLhPXtmH_IzhkWSwvjx2OF6UNveHlBHdWoxftPut2CvD71l55bbBmFyl392Oyh2Qo3-euVjiAPlCCZQdvtIW6hiezh5Ku5o6IrKagMiqLdBv94631Rd1tYCNCOmWxEQ9g/s64/Break_the_Ice.webp",
        desc: "",
      },
      揮金如土: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFRofcLO7U_DkHFZcIVK_oCYyHbI_jVN5xeHHyJVGMr9EIIt8NXZ2GROiLvjYAYy4A3P_CHu0Rk7yxp1CDlIm6qRoLxTJhyphenhyphen5efmfJpvFUNIlhBr95KGhg7msyNZSuhbNRsLmkxLg6moyj2CwgTla3CHjTv_x9Uwb6nVKtYTCewgao7GgnyihLVaq7gYxE/s64/Extravagant_Consumption.webp",
        desc: "",
      },
      鐵鎖連環: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7XVFr_wMq-FxNa7nkfzSd6WIhjvnL9Lxpea1HTNBh3use0vePJnW2NpKbPdxnAgN6tUjKtW-0G0zjJHgbEGXjYRzGcl_dBmf1DuiM9PCzDjWfck5NbulPqpU24Ebry3W0i0RYvSV0NdsK5TSIfuReZLddooh0p4SKbH_hQJvrOaVhYFUv6MMnxOekXuc/s64/Iron_Circuit.webp",
        desc: "",
      },
      匠心獨運: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipiXmajUph7zL0L5mozxKdCbBadijvr1WAHGJ0muqWMYrMQzj4S0u5HYOvsl9-KmU1iVoIjrWNHQMvJ9HFx1dFOnqmzGo3jFNTjGy2vsMZV3SGWcVPD9HjY8vb88JN9-n5_ZgRJGpwo5wzPI9fgGtzZ9ywkhjeCP1lYwgMUNvJO4YIKHxReOaKywuH6Pg/s64/Masterful_Craftsmanship.webp",
        desc: "",
      },
      殊途同歸: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyO5RUIpYjcCI-Ckjk8wycguIeSNDXH2dQZc-v_D-frEEd3GBrtx2fDPlFT32RU2PG3zOsRPBuWgut54tsYLivr5pcZ52Z89nXfI6KvDtd-LaOFSq0SxMeIDNllajdq6u9CR4NJUuUwyL-AhRINQUJ1nehXwValcj-SZs5e9rPoMlk2jMS4iiGkPpC_Lo/s64/Convergent_Paths.webp",
        desc: "",
      },
      額外服務: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMxGXRMAPcWbcgJaG6vqe5_ndmOAF0rZaesy9UTawUq9nQ-j7yR9dg92kcC6BtEIJPT_LDlwmxWfAfWUgPFHq4p65_61SJhKEo838xjcGqTx5ptMFPnB0PmnZ9k6UIXk-yi29KqPffht6AHL1d7jw7IXTM_dH96Zckwq88h1K-wdE8kCJvO36XKR9bo-4/s64/Enhancement_Lover.webp",
        desc: "",
      },
      華章天求: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3k38jah0SsC8fSoeUpSxbY7WGQLdWkjlRe79kSyFqBUQhygydaCqL0rYbywvuQHoGvqVbdMaemHyXYpgZeBAqLapWETaK6zJizO_S96DC7y_fRJrmKW_vXC1ZlzAwPRZ6DtrwiUNhOwEaI3RdoAhxp2ONq-h2NjCUsN0bkxg5dzrv_gWbnAuapryGknM/s64/Scroll_Enhancer.webp",
        desc: "",
      },
      先苦後甜: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1AP9aQ2wG6H5IUXZq8JTuNiM699a7fMv63ERH4Z5nxOadG514jbSUe2-JAYfm97BOGdkoKOuOwKXibzs6OxHZ1aJvZ-wWbCI8y7AKuJFoXWUtSNSEC_Yi13edV2BkFBRiT5uX8B9exlI3eUzbXafYtZnKWckQrHqmIDxC6bVBdFh7ZEEkOT38yRBM7cI/s64/Pain_for_Gain.webp",
        desc: "",
      },
      好事成雙: {
        tier: "legendary",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHlhd0dFbid_uptuBI0PZU3AABAgTtIKBNth_mnKLB0t7Zs68z_wxWJH9b2p5Xhx8Sm-DbDwKyuStVXVe6C0QRevkaIrX-mgvdGHqYZlyfPitOLTZQlOKoHTl1Zl7fiA-4zxat9jSSIRT35QayGUk3D3NdESGAIX1UtgiOAb9pzbhjXMIjfHRolrm0GCU/s64/It_Takes_Two.webp",
        desc: "",
      },
      //詛咒
      黑毛公雞: {
        tier: "cursed",
        img: "",
        desc: "",
      },
    },
    achievement: {
      //呦呦
      呦呦之勝: {
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgu1r-WOH8O8HUQCNm5YL5GEaESalpZifXloXzk_2HTrVodgkAsi4QYmzk-RbuATOvMhALGRllMrIncE349i1EZO1VCOD3-jU19RdQ2b03VYKDBNp9xm0cXvt4iSerHvwkkdS2kaNK_yhAQ8YJhpN1KCc8_S8QYcdkfo60doz2TTEsX0BB3mb_tCUc0KQQ/s64/ach_yoyo_01.webp",
        desc: "使用呦呦通關任意難度",
      },
      荒野祭儀: {
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgpRRPHnMeoLhMnC5sIzDaPSvl8f-h3kEqCyMnSo1SCmN0RCbsUAlnheDjpBSMhHhhYZqYoFe7LTRT4PEkhKX1sbXWPK6wnmTvRpOwn4mCOomVUk72jTdP9CA1klyOe1cP_QSmhlsZ2GHst1Ov6-vwdSq1mwqYiE4VbSW-25LMlcVIR9v2hU22imgft7Q/s64/ach_yoyo_02.webp",
        desc: "獲得呦呦的專屬等級邊框",
      },
      木靈之主: {
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLIByL6IOh7nHN6nljxtv4F__dckn8Hlr4VBVD9NJtXrdfcXfSg-5DnXrqj1bxAZJ9HaOug8B_IulmGAq88lJ2L51QlHl3fzRW9_YKz2_H9FAJyDePudfpNYvl7u42L5AUH3buLcDix9fCuhqSIF0p8iksUe-_QMf_18emjzhPaxEHxrzX-V6Oz1VrCA0/s64/ach_yoyo_03.webp",
        desc: "使用呦呦，累計召喚出10000隻木靈",
      },
    },
  },

  // 🦸‍♂️ 英雄專屬資源：技能、天賦、覺醒、靈佑
  Heroes: {
    桃: {
      Role: {
        桃: {
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk4iDscRNmai25GhgfFPLXp0Hh5TWLj4sCCeuZj5iovsZXVPQEkQwoF-QERoM8nT06c07rXC5RiBL87JB9EJtRLdZAOEt7FsdRSGwb2PTTmOfs54vN14_zXzLHnKjEKBR6pGQA5juOKbEofim0whgtIDacs4_XcPg2iMmx6fZ8JswBON8vx-f6q-7nwEg/s788/youyou.webp",
        },
      },
      skills: {
        出鞘: {
          img: "https://placehold.co/100x100/111/ffcc00?text=出鞘",
          desc: "向前方發射多把飛劍，每把飛劍造成300點普通傷害。飛劍的數量由“劍心”層數決定，每層“劍心”會發射3把飛劍。每消耗15發彈藥，可獲得1層“劍心”（最高6層）。",
        },
        飛花: {
          img: "https://placehold.co/100x100/111/ffcc00?text=飛花",
          desc: "在前方召喚花瓣產生爆炸，標記6公尺範圍內的敵人並造成600點普通傷害。標記存在6秒，每對標記的敵人造成12次傷害，會額外觸發一次【飛花】的傷害。",
        },
      },
      talents: {
        心劍相依: {
          img: "https://placehold.co/100x100/111/00e5ff?text=心劍相依",
          desc: "每有1層“劍心”，【出鞘】的傷害提升5%。",
        },
        白駒過隙: {
          img: "https://placehold.co/100x100/111/00e5ff?text=白駒過隙",
          desc: "每擊殺一個敵人，移動速度增加10%，持續8秒(最高5層)。",
        },
        花謝花開: {
          img: "https://placehold.co/100x100/111/00e5ff?text=花謝花開",
          desc: "【飛花】每標記5個敵人，回復1次使用次數。",
        },
        花開千樹: {
          img: "https://placehold.co/100x100/111/00e5ff?text=花開千樹",
          desc: "彈匣容量與換彈速度增加30%。",
        },
        秋水無痕: {
          img: "https://placehold.co/100x100/111/00e5ff?text=秋水無痕",
          desc: "擊殺敵人後護盾立刻開始回復，且3秒內護盾回復不會被打斷。",
        },
      },
      ascensions: {
        //覺醒分支一
        蠱術精進: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinYYoy5_5DvOowGgm66vIU_-oQDaJcQY31cTDViD_t2yI_x8E7thU3DQ3ldYpQuLEQdK-tbtQnmLK_nKjqkVgOeCxRKXm-gYAvGw0wOqSofP07yh6cwN9JbgIfb2aJ2zGJ-tFY7sgDIyeel771hgOK2tu4idrWS4_Y6ZIQcLvWHGYQGRgkdJErTx2wAP0/s64/Ascension_Parasite_Mastery.webp",
          desc: "寄生流核心增傷",
        },
        呼朋引伴: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXGC_rtwnHMX4oAvPbv9L7Nz48fFHL4BX_DKqvfnr_eIfV7WS7sSbx6u0nzl6K1WInHzAyu4XC6zpcMYstwVL2p0uCfLjuEtQOeBncEtK3hWLQ12raOeNsSFlOMo2Istbw1wuB2wEFyC2TtmzBgT_TghG1Dx2mXs2GqzD1gLcHNvuFdxpHRPj9Lm2NbdA/s64/Ascension_Allies_Summon.webp",
          desc: "靈氣連接選擇優先度高",
        },
        迅猛侵蝕: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhC8dqbeTEDb-uVSwVNHAtBAscMqdfab0s1SM0aVWQqRcrVhnGtLJCvIJ4IsnEPoeHSqFTQ8_m_G0YrGLVWi_pjBaJXpJ1M7AqLpXQjzb66LNy-vFws3kFFARb_S1vf2q7w0jIesbdDKOEUOKhlQCPiLHLfTZsn7j_aa7YksoJqPUacR1iogeKeS_5uxHw/s64/Ascension_Rapid_Decay.webp",
          desc: "高頻觸發次要傷害",
        },
        自然輪迴: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4lN3_G4951fseyYOC4ZDdvGhrIDzM3lu3sU9X7WuWb3zRh4X6hvpdogbE1Q2U5Upfo6g_lTWJlH_Fwg1ZarpFiTeF3vWgqQU4Lf6gINQj6fpgIFSYzBrU53jYR8-e8k5fEDR_8L7j1Y9tQppRhY-TyzB7ye_eXP1vsTYdX_deX_1PaE9orcakDVjRZaQ/s64/Ascension_Nature_Reincarnation.webp",
          desc: "機率性控場與增傷",
        },
        森林餽贈: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwb6WYGDVpUSVggpgSbZT-m7RbGrxkHztlnEu4wKhoqqgkVUwmsWkVaLIqPZpx6lCE7GB8cI8L0j7-e-hdt0HlAoEue42Geh4eNa2HVWgwahAr8QB50upVhm9h6bvrHJUBpJAVqEHzuhv4kjDMEbjVtRZtU8CghEgFBcTruLGY56BiNYcQsdQIFrCfwwk/s64/Ascension_Forest_Boon.webp",
          desc: "次要技能補給",
        },
        孢塵擴散: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9q2gstcS1dLI5py7MPNEfmalgdcwct1IIKOse1qoZ2FeQsv4fokA5qaRmSu7rqFjW71IYSVIXHeAazIFb_pjvxuw9sx_n-0XyQiyfsJnMFYhbLw9sxUgwGVlSl93TcYJ2Pbw0NsXIQA5N9onVcS6Cs-qB6k7ZUxOdB7ezqOTC4zue6WYXZZhz88RXHiQ/s64/Ascension_Spore_Spread.webp",
          desc: "強化群體傳播能力",
        },
        //覺醒分支二
        靈植強化: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjl4AD7Xr8W1Vd1JfXq_xxQNHpZ84JumPUiq7Tai0kAyMu78BeKn92WeoGiszZfCVVk_1VuGWfkAPXYFT29IdRhiEuyKCpztDqY7iLmu4eTUhdXJa8VTINgi_3sEKK4JlGv7mvxRYxUCLQhg68l4hIQ5jnbhWgURulLN_u7pniDlFpwRWjcR-kXv2Y0rCw/s64/Ascension_Spirit_Enhancement.webp",
          desc: "提升木靈基礎傷害",
        },
        雨後春筍: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnThXDeUxFjnBf7Nvu_i2MwsUnuHQ8OFGsmnRUPQMgeMLjiuKWROhqoX6YxlR0guccw0RCitUaSuWNVtWnkpH14J34KGhlPjR4g0_QSZCXVSpgJDYNjuxYUNh1DfywKIQeWbq6PFm6T1Sts8nAdoLVzzD_HRoNfeFXZdaVODiNvwpe3_qb_g-m4-ODi6Y/s64/Ascension_Vernal_Emergence.webp",
          desc: "減輕冷卻壓力",
        },
        生意盎然: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiK2yqAOoJc6OKR4rTZPoe1GzjXn376LVSpNpwIiGp0AKGv5GUF6tmzeui4RegvOZtIvSp1TVbS7jDcJpGQwfLr5DD45DkNKVNGYBQVB1CIVi5XX4R6NWM_urHbC-mTR-bHCbjf2m9_YY9gh9UOhFCzXiQRmUXbVSHroLRDu8YkTACjGPVUIVhJLX7Qjho/s64/Ascension_Vitality_Surge.webp",
          desc: "疊加型增傷",
        },
        枝繁葉茂: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiB70Pu-E7giJcJy-97RMpjPeNqsH4DnUxLr1orCcnpEwkdHWIMYySPOd_PYNWHeu0gEiOFSD9D4WGJxBB_Iw-bmpU0P5w8jkzcqY3nIZOoqY21k_PwyXt0eaZbVgeVDWDQmnmE6p7dtdxHpQNpTnas6kEs1rnZ7x3L6PjjAL5-NcYbz4sm1gfKaDHwWgk/s64/Ascension_Lush_Foliage.webp",
          desc: "強化木靈生存與範圍",
        },
        靈植庇護: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRody-MgAP9xONxYsgZo0ARl1LSCOKltZb2Ifj-joEf8d0q3p344aSHFgDLY5EH2u4DCRrvdWiL6SVAuVbqALmTdrVEhAvHue2JT73aPtFfhR0bi0SdIKQYBtpOizGlWfwg_s18C1rED4Z20hrcUNeZE2raJIdY_4wd-fwyGOFT3-8GE-8vyP2LNaPtoY/s64/Ascension_Guardian_Spirit.webp",
          desc: "護盾回復與免死機制",
        },
        森林領域: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUr-_cQ_gCBuSHRBZ1yr93SXg9vXxfnCJn1IWIJML8dY83UkrVruXFV4qI51AxGwoO8he-8iU7Az9AwD1UcRNkvUN0JIE-oDWd48S0TwTlxi9-TAZhcjmWS2yjHFnNvRGs5NLfNPx679C9dQZX-IsZ1Wgw-MUgnL7EAPVamiLULoG3aevArvrItI2ucI4/s64/Ascension_Forest_Domain.webp",
          desc: "提升領域內異常機率",
        },
        //覺醒分支三
        深度腐蝕: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKLvjg2VbeVX3dCe6sjkC79t8ND93GSn2u8mo3FmymJE_g2-HpkRx6a4axT09bBw_DWiM4GMRzU8nNmmxGIzMG8iBXg6C2AlBZtBwlueS9EDfE5pgbgX3gnkHN76khWoTeEYYzEk6v2EHxasGlN12oSbX8QONjoWQHpZ2euza-bfnrourG_TZnXhRJm9g/s64/Ascension_Deep_Corrosion.webp",
          desc: "強化腐蝕與減速",
        },
        柳暗花明: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia2B1gKkCgyAwH1-eb4MAv_UFoUv2nx9ZVJsTFtxuwF0NYe4if1j3MhQ1xkCULtnmqbulWSxlYPCz-xD8egKFYQ5c9wbqhDs0G6zJm0wv90RMdPbx0FpqBCvn5lHVS8aBl68rHESYwWME99opwma3DsC6Z24IxJGzh9L7U_7CW5ddbGuIV-JuTGxF2oWs/s64/Ascension_New_Dawn.webp",
          desc: "武器資源返還機制",
        },
        能源回收: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgg3jSenrSSvUCsn0x8UiAZo1svgCFLS_F1QsC3p2TfJSn2mmPKeMCA4eofcOr2DhPPlyehQHN15zqH0lZ27AF2uZfPLZYjmi4uHxbTFKX_uJcvj52N2pdnzU00FqD1F0XHS8n1_Pa_xMdSA1zwsWkrNIU4sk2jAPpFh6N9Z5-UCgo-lpeFsVp9x8xD5zo/s64/Ascension_Energy_Recall.webp",
          desc: "提升幸運一擊機率",
        },
        荊棘密布: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjV9LVQaNOwEPGeRrIjefMnLm9mOY2W61ySWCk_eZn-INVmrZWZhgMGAiNAl22ZIw12cfU7dnKIvS2iHUJiSncwz1CeGXL257WiN6b2BcmvDSBnJQ9ajWuJiNav8oOOIkQNMhSvt5FljU3-ZhIBqLxBqUe6W0MJU2wCykZ_L50sUkQoik-8vM-wQnp_ftY/s64/Ascension_Thornfield.webp",
          desc: "減速狀態增傷",
        },
        自然屏障: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhulrHMKJS3vf4qEn4eiGlGNgFQ4AJT9vAqfcd0HGWMgSkMa72CVuwnD-fDYsh9bcLvHWwoMIUanQ1IosQnWjsD4FQ9FBe_4N1DAKVXZ8_6ASVUdE8ep_wyN4OfNoBFADmPxurZVin6nvHWvAnKejZlSFzyjyWsUQ56g2suy-O1PNJ1-2jaE5b6eFPdgY/s64/Ascension_Natural_Shield.webp",
          desc: "展開領域抵擋彈道",
        },
        法力轉化: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEge8BWfhalWIDtRcmP2EPpS3w_RYO3qgt4kL9nrqHWhTc-TQVrM3P8TbCt58Ha1h0PGWWPKM32tJt3OEKEAW8PUCHdgpvW-4lw6B7oQStDSHwaY11zjGSg6qSeXzBj9zm8oWJO88o7v-eFcjDO9U5BhAXFPdDevI_0jSN5_-wQymL9E1PWLSWYhoLKUAFE/s64/Ascension_Mana_Convert.webp",
          desc: "大幅強化法杖輸出",
        },
      },
      blessings: {
        滿城飛花: {
          img: "https://placehold.co/150x150/111/ff8c00?text=滿城飛花",
          desc: "SYS_LOG: 射擊命中未被飛花標記的敵人時會對其標記飛花，觸發飛花額外傷害所需的傷害次數-6。",
        },
        飛花之棘: {
          img: "https://placehold.co/150x150/111/ff8c00?text=飛花之棘",
          desc: "SYS_LOG: 每使用一次飛花，飛花基礎傷害增加160，持續30秒，最多10層。飛花標記消失時，會再次對敵人造成兩次飛花傷害，且標記期間該名敵人每受到1次飛劍傷害，這兩次飛花最終傷害都會提高100%。",
        },
        刺骨飛劍: {
          img: "https://placehold.co/150x150/111/ff8c00?text=刺骨飛劍",
          desc: "SYS_LOG: 飛劍會額外造成敵人生命值10%的真實傷害（對精英怪/首領最高造成組隊人數x5000點傷害）。",
        },
        劍術精研: {
          img: "https://placehold.co/150x150/111/ff8c00?text=劍術精研",
          desc: "SYS_LOG: 使用出鞘的過程中，射擊速度+50%。出鞘的冷卻期間也可以疊加“劍心”層數，出鞘施法期間每獲得2層“劍心”，下一次出鞘的劍心層數額外+1，最多+3。",
        },
      },
    },
    紫鴞: {
      Role: {
        紫鴞: {
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk4iDscRNmai25GhgfFPLXp0Hh5TWLj4sCCeuZj5iovsZXVPQEkQwoF-QERoM8nT06c07rXC5RiBL87JB9EJtRLdZAOEt7FsdRSGwb2PTTmOfs54vN14_zXzLHnKjEKBR6pGQA5juOKbEofim0whgtIDacs4_XcPg2iMmx6fZ8JswBON8vx-f6q-7nwEg/s788/youyou.webp",
        },
      },
      skills: {
        星落: {
          img: "https://placehold.co/100x100/111/ffcc00?text=星落",
          desc: "隨機獲得【星象】直到填滿槽位獲得【陣圖】，根據【陣圖】接引星辰墜落，對一定範圍內的敵人造成傷害，隨後清空【陣圖】。",
        },
        占星: {
          img: "https://placehold.co/100x100/111/ffcc00?text=占星",
          desc: "隨機獲得【星象】並召喚3張卡牌守護自身，卡牌會自動追蹤7公尺範圍內的敵人，每張卡牌可造成500點基礎傷害。",
        },
      },
      talents: {
        秘卷精通: {
          img: "https://placehold.co/100x100/111/00e5ff?text=秘卷精通",
          desc: "可在背包中提升秘卷品質，秘卷效果不變；或是將秘卷重置為不低於當前品質的其他秘卷，每個秘卷僅限1次。初始獲得1次重置次數，每獲得1個覺醒，增加2次秘卷提升次數和1次重置次數。",
        },
        失而復得: {
          img: "https://placehold.co/100x100/111/00e5ff?text=失而復得",
          desc: "【星落】未造成傷害時，返還100%冷卻時間（冷卻時間15秒）。",
        },
        日臻至善: {
          img: "https://placehold.co/100x100/111/00e5ff?text=日臻至善",
          desc: "累計發射300張卡牌後，發射頻率提高，一次最多發射2張卡牌；累計發射800張卡牌後，一次最多發射4張卡牌；累計發射1600張卡牌後，一次最多發射8張卡牌。",
        },
        一心無二: {
          img: "https://placehold.co/100x100/111/00e5ff?text=一心無二",
          desc: "覺醒升至2級後，出現的機率會增加。",
        },
        運勢流轉: {
          img: "https://placehold.co/100x100/111/00e5ff?text=運勢流轉",
          desc: "切換關卡後，會優化抽取【星象】的初始機率。",
        },
      },
      ascensions: {
        //覺醒分支一
        蠱術精進: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinYYoy5_5DvOowGgm66vIU_-oQDaJcQY31cTDViD_t2yI_x8E7thU3DQ3ldYpQuLEQdK-tbtQnmLK_nKjqkVgOeCxRKXm-gYAvGw0wOqSofP07yh6cwN9JbgIfb2aJ2zGJ-tFY7sgDIyeel771hgOK2tu4idrWS4_Y6ZIQcLvWHGYQGRgkdJErTx2wAP0/s64/Ascension_Parasite_Mastery.webp",
          desc: "寄生流核心增傷",
        },
        呼朋引伴: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXGC_rtwnHMX4oAvPbv9L7Nz48fFHL4BX_DKqvfnr_eIfV7WS7sSbx6u0nzl6K1WInHzAyu4XC6zpcMYstwVL2p0uCfLjuEtQOeBncEtK3hWLQ12raOeNsSFlOMo2Istbw1wuB2wEFyC2TtmzBgT_TghG1Dx2mXs2GqzD1gLcHNvuFdxpHRPj9Lm2NbdA/s64/Ascension_Allies_Summon.webp",
          desc: "靈氣連接選擇優先度高",
        },
        迅猛侵蝕: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhC8dqbeTEDb-uVSwVNHAtBAscMqdfab0s1SM0aVWQqRcrVhnGtLJCvIJ4IsnEPoeHSqFTQ8_m_G0YrGLVWi_pjBaJXpJ1M7AqLpXQjzb66LNy-vFws3kFFARb_S1vf2q7w0jIesbdDKOEUOKhlQCPiLHLfTZsn7j_aa7YksoJqPUacR1iogeKeS_5uxHw/s64/Ascension_Rapid_Decay.webp",
          desc: "高頻觸發次要傷害",
        },
        自然輪迴: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4lN3_G4951fseyYOC4ZDdvGhrIDzM3lu3sU9X7WuWb3zRh4X6hvpdogbE1Q2U5Upfo6g_lTWJlH_Fwg1ZarpFiTeF3vWgqQU4Lf6gINQj6fpgIFSYzBrU53jYR8-e8k5fEDR_8L7j1Y9tQppRhY-TyzB7ye_eXP1vsTYdX_deX_1PaE9orcakDVjRZaQ/s64/Ascension_Nature_Reincarnation.webp",
          desc: "機率性控場與增傷",
        },
        森林餽贈: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwb6WYGDVpUSVggpgSbZT-m7RbGrxkHztlnEu4wKhoqqgkVUwmsWkVaLIqPZpx6lCE7GB8cI8L0j7-e-hdt0HlAoEue42Geh4eNa2HVWgwahAr8QB50upVhm9h6bvrHJUBpJAVqEHzuhv4kjDMEbjVtRZtU8CghEgFBcTruLGY56BiNYcQsdQIFrCfwwk/s64/Ascension_Forest_Boon.webp",
          desc: "次要技能補給",
        },
        孢塵擴散: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9q2gstcS1dLI5py7MPNEfmalgdcwct1IIKOse1qoZ2FeQsv4fokA5qaRmSu7rqFjW71IYSVIXHeAazIFb_pjvxuw9sx_n-0XyQiyfsJnMFYhbLw9sxUgwGVlSl93TcYJ2Pbw0NsXIQA5N9onVcS6Cs-qB6k7ZUxOdB7ezqOTC4zue6WYXZZhz88RXHiQ/s64/Ascension_Spore_Spread.webp",
          desc: "強化群體傳播能力",
        },
        //覺醒分支二
        靈植強化: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjl4AD7Xr8W1Vd1JfXq_xxQNHpZ84JumPUiq7Tai0kAyMu78BeKn92WeoGiszZfCVVk_1VuGWfkAPXYFT29IdRhiEuyKCpztDqY7iLmu4eTUhdXJa8VTINgi_3sEKK4JlGv7mvxRYxUCLQhg68l4hIQ5jnbhWgURulLN_u7pniDlFpwRWjcR-kXv2Y0rCw/s64/Ascension_Spirit_Enhancement.webp",
          desc: "提升木靈基礎傷害",
        },
        雨後春筍: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnThXDeUxFjnBf7Nvu_i2MwsUnuHQ8OFGsmnRUPQMgeMLjiuKWROhqoX6YxlR0guccw0RCitUaSuWNVtWnkpH14J34KGhlPjR4g0_QSZCXVSpgJDYNjuxYUNh1DfywKIQeWbq6PFm6T1Sts8nAdoLVzzD_HRoNfeFXZdaVODiNvwpe3_qb_g-m4-ODi6Y/s64/Ascension_Vernal_Emergence.webp",
          desc: "減輕冷卻壓力",
        },
        生意盎然: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiK2yqAOoJc6OKR4rTZPoe1GzjXn376LVSpNpwIiGp0AKGv5GUF6tmzeui4RegvOZtIvSp1TVbS7jDcJpGQwfLr5DD45DkNKVNGYBQVB1CIVi5XX4R6NWM_urHbC-mTR-bHCbjf2m9_YY9gh9UOhFCzXiQRmUXbVSHroLRDu8YkTACjGPVUIVhJLX7Qjho/s64/Ascension_Vitality_Surge.webp",
          desc: "疊加型增傷",
        },
        枝繁葉茂: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiB70Pu-E7giJcJy-97RMpjPeNqsH4DnUxLr1orCcnpEwkdHWIMYySPOd_PYNWHeu0gEiOFSD9D4WGJxBB_Iw-bmpU0P5w8jkzcqY3nIZOoqY21k_PwyXt0eaZbVgeVDWDQmnmE6p7dtdxHpQNpTnas6kEs1rnZ7x3L6PjjAL5-NcYbz4sm1gfKaDHwWgk/s64/Ascension_Lush_Foliage.webp",
          desc: "強化木靈生存與範圍",
        },
        靈植庇護: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRody-MgAP9xONxYsgZo0ARl1LSCOKltZb2Ifj-joEf8d0q3p344aSHFgDLY5EH2u4DCRrvdWiL6SVAuVbqALmTdrVEhAvHue2JT73aPtFfhR0bi0SdIKQYBtpOizGlWfwg_s18C1rED4Z20hrcUNeZE2raJIdY_4wd-fwyGOFT3-8GE-8vyP2LNaPtoY/s64/Ascension_Guardian_Spirit.webp",
          desc: "護盾回復與免死機制",
        },
        森林領域: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUr-_cQ_gCBuSHRBZ1yr93SXg9vXxfnCJn1IWIJML8dY83UkrVruXFV4qI51AxGwoO8he-8iU7Az9AwD1UcRNkvUN0JIE-oDWd48S0TwTlxi9-TAZhcjmWS2yjHFnNvRGs5NLfNPx679C9dQZX-IsZ1Wgw-MUgnL7EAPVamiLULoG3aevArvrItI2ucI4/s64/Ascension_Forest_Domain.webp",
          desc: "提升領域內異常機率",
        },
        //覺醒分支三
        深度腐蝕: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKLvjg2VbeVX3dCe6sjkC79t8ND93GSn2u8mo3FmymJE_g2-HpkRx6a4axT09bBw_DWiM4GMRzU8nNmmxGIzMG8iBXg6C2AlBZtBwlueS9EDfE5pgbgX3gnkHN76khWoTeEYYzEk6v2EHxasGlN12oSbX8QONjoWQHpZ2euza-bfnrourG_TZnXhRJm9g/s64/Ascension_Deep_Corrosion.webp",
          desc: "強化腐蝕與減速",
        },
        柳暗花明: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia2B1gKkCgyAwH1-eb4MAv_UFoUv2nx9ZVJsTFtxuwF0NYe4if1j3MhQ1xkCULtnmqbulWSxlYPCz-xD8egKFYQ5c9wbqhDs0G6zJm0wv90RMdPbx0FpqBCvn5lHVS8aBl68rHESYwWME99opwma3DsC6Z24IxJGzh9L7U_7CW5ddbGuIV-JuTGxF2oWs/s64/Ascension_New_Dawn.webp",
          desc: "武器資源返還機制",
        },
        能源回收: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgg3jSenrSSvUCsn0x8UiAZo1svgCFLS_F1QsC3p2TfJSn2mmPKeMCA4eofcOr2DhPPlyehQHN15zqH0lZ27AF2uZfPLZYjmi4uHxbTFKX_uJcvj52N2pdnzU00FqD1F0XHS8n1_Pa_xMdSA1zwsWkrNIU4sk2jAPpFh6N9Z5-UCgo-lpeFsVp9x8xD5zo/s64/Ascension_Energy_Recall.webp",
          desc: "提升幸運一擊機率",
        },
        荊棘密布: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjV9LVQaNOwEPGeRrIjefMnLm9mOY2W61ySWCk_eZn-INVmrZWZhgMGAiNAl22ZIw12cfU7dnKIvS2iHUJiSncwz1CeGXL257WiN6b2BcmvDSBnJQ9ajWuJiNav8oOOIkQNMhSvt5FljU3-ZhIBqLxBqUe6W0MJU2wCykZ_L50sUkQoik-8vM-wQnp_ftY/s64/Ascension_Thornfield.webp",
          desc: "減速狀態增傷",
        },
        自然屏障: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhulrHMKJS3vf4qEn4eiGlGNgFQ4AJT9vAqfcd0HGWMgSkMa72CVuwnD-fDYsh9bcLvHWwoMIUanQ1IosQnWjsD4FQ9FBe_4N1DAKVXZ8_6ASVUdE8ep_wyN4OfNoBFADmPxurZVin6nvHWvAnKejZlSFzyjyWsUQ56g2suy-O1PNJ1-2jaE5b6eFPdgY/s64/Ascension_Natural_Shield.webp",
          desc: "展開領域抵擋彈道",
        },
        法力轉化: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEge8BWfhalWIDtRcmP2EPpS3w_RYO3qgt4kL9nrqHWhTc-TQVrM3P8TbCt58Ha1h0PGWWPKM32tJt3OEKEAW8PUCHdgpvW-4lw6B7oQStDSHwaY11zjGSg6qSeXzBj9zm8oWJO88o7v-eFcjDO9U5BhAXFPdDevI_0jSN5_-wQymL9E1PWLSWYhoLKUAFE/s64/Ascension_Mana_Convert.webp",
          desc: "大幅強化法杖輸出",
        },
      },
      blessings: {
        星海羅盤: {
          img: "https://placehold.co/150x150/111/ff8c00?text=星海羅盤",
          desc: "SYS_LOG: 星落的最終傷害提高200%，使用次數+1。受背包秘卷影響，有機率會使星落的【陣圖】品質提升1級。【傳說陣圖】的星落提升1級將獲得額外效果：星落每對單個目標造成0.75秒持續傷害時，對其3.5公尺範圍內的敵人造成2400點傷害。",
        },
        爆裂手牌: {
          img: "https://placehold.co/150x150/111/ff8c00?text=爆裂手牌",
          desc: "SYS_LOG: 卡牌命中敵人時會觸發1次5公尺範圍的爆炸，並對爆炸範圍內的敵人造成1次該卡牌的傷害。占星會獲得與上一個槽位一樣的【星象】，如果槽位已滿則會清空【陣圖】並獲得7秒的技能傷害加成（有機率不清空陣圖）。【普通/稀有/傳說陣圖】分別提高80%/160%/320%最終傷害。",
        },
        萬用套牌: {
          img: "https://placehold.co/150x150/111/ff8c00?text=萬用套牌",
          desc: "SYS_LOG: 消耗【星象】時，會獲得武器加成，持續5秒。【普通星象】射速+5%；【稀有星象】武器傷害+30%；【傳說星象】幸運一擊機率+20%；【幻變星象】暴擊倍率+0.5x。",
        },
        險中求富: {
          img: "https://placehold.co/150x150/111/ff8c00?text=險中求富",
          desc: "SYS_LOG: 每個秘卷可以額外重置一次，且每獲得1個覺醒額外獲得1次重置次數，重置時有50%的機率將秘卷升級為強化秘卷。",
        },
      },
    },
    小玖: {
      Role: {
        小玖: {
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk4iDscRNmai25GhgfFPLXp0Hh5TWLj4sCCeuZj5iovsZXVPQEkQwoF-QERoM8nT06c07rXC5RiBL87JB9EJtRLdZAOEt7FsdRSGwb2PTTmOfs54vN14_zXzLHnKjEKBR6pGQA5juOKbEofim0whgtIDacs4_XcPg2iMmx6fZ8JswBON8vx-f6q-7nwEg/s788/youyou.webp",
        },
      },
      skills: {
        天降神兵: {
          img: "https://placehold.co/100x100/111/ffcc00?text=天降神兵",
          desc: "【鐵翼-衝擊模式】會對目標位置進行俯衝攻擊，對周圍10公尺範圍內的敵人造成普通傷害，同時嘲諷敵人3秒。若切換為【鐵翼-火力模式】（重新部署），則會在目標位置進行陣地部署，進行駐地遠程射擊。",
        },
        硬木飛彈: {
          img: "https://placehold.co/100x100/111/ffcc00?text=硬木飛彈",
          desc: "發射一枚飛彈，對周圍範圍內的敵人造成傷害。若飛彈命中鐵翼，會為其回復生命值。（註：鐵翼處於火力模式時，發射的傷害與小玖的硬木飛彈相同）。",
        },
      },
      talents: {
        加固裝甲: {
          img: "https://placehold.co/100x100/111/00e5ff?text=加固裝甲",
          desc: "小玖生命值+30，鐵翼生命值+25%。",
        },
        改良工藝: {
          img: "https://placehold.co/100x100/111/00e5ff?text=改良工藝",
          desc: "硬木飛彈的基礎傷害+100；每提升1級覺醒，鐵翼攻擊力+20。",
        },
        幸運彈匣: {
          img: "https://placehold.co/100x100/111/00e5ff?text=幸運彈匣",
          desc: "補滿彈匣後，幸運一擊機率+20%，持續4秒。",
        },
        急救模組: {
          img: "https://placehold.co/100x100/111/00e5ff?text=急救模組",
          desc: "當小玖倒地後，鐵翼會對小玖進行救助。",
        },
        激進工藝: {
          img: "https://placehold.co/100x100/111/00e5ff?text=激進工藝",
          desc: "鐵翼的最終傷害有25%機率增加100%。",
        },
      },
      ascensions: {
        //覺醒分支一
        蠱術精進: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinYYoy5_5DvOowGgm66vIU_-oQDaJcQY31cTDViD_t2yI_x8E7thU3DQ3ldYpQuLEQdK-tbtQnmLK_nKjqkVgOeCxRKXm-gYAvGw0wOqSofP07yh6cwN9JbgIfb2aJ2zGJ-tFY7sgDIyeel771hgOK2tu4idrWS4_Y6ZIQcLvWHGYQGRgkdJErTx2wAP0/s64/Ascension_Parasite_Mastery.webp",
          desc: "寄生流核心增傷",
        },
        呼朋引伴: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXGC_rtwnHMX4oAvPbv9L7Nz48fFHL4BX_DKqvfnr_eIfV7WS7sSbx6u0nzl6K1WInHzAyu4XC6zpcMYstwVL2p0uCfLjuEtQOeBncEtK3hWLQ12raOeNsSFlOMo2Istbw1wuB2wEFyC2TtmzBgT_TghG1Dx2mXs2GqzD1gLcHNvuFdxpHRPj9Lm2NbdA/s64/Ascension_Allies_Summon.webp",
          desc: "靈氣連接選擇優先度高",
        },
        迅猛侵蝕: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhC8dqbeTEDb-uVSwVNHAtBAscMqdfab0s1SM0aVWQqRcrVhnGtLJCvIJ4IsnEPoeHSqFTQ8_m_G0YrGLVWi_pjBaJXpJ1M7AqLpXQjzb66LNy-vFws3kFFARb_S1vf2q7w0jIesbdDKOEUOKhlQCPiLHLfTZsn7j_aa7YksoJqPUacR1iogeKeS_5uxHw/s64/Ascension_Rapid_Decay.webp",
          desc: "高頻觸發次要傷害",
        },
        自然輪迴: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4lN3_G4951fseyYOC4ZDdvGhrIDzM3lu3sU9X7WuWb3zRh4X6hvpdogbE1Q2U5Upfo6g_lTWJlH_Fwg1ZarpFiTeF3vWgqQU4Lf6gINQj6fpgIFSYzBrU53jYR8-e8k5fEDR_8L7j1Y9tQppRhY-TyzB7ye_eXP1vsTYdX_deX_1PaE9orcakDVjRZaQ/s64/Ascension_Nature_Reincarnation.webp",
          desc: "機率性控場與增傷",
        },
        森林餽贈: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwb6WYGDVpUSVggpgSbZT-m7RbGrxkHztlnEu4wKhoqqgkVUwmsWkVaLIqPZpx6lCE7GB8cI8L0j7-e-hdt0HlAoEue42Geh4eNa2HVWgwahAr8QB50upVhm9h6bvrHJUBpJAVqEHzuhv4kjDMEbjVtRZtU8CghEgFBcTruLGY56BiNYcQsdQIFrCfwwk/s64/Ascension_Forest_Boon.webp",
          desc: "次要技能補給",
        },
        孢塵擴散: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9q2gstcS1dLI5py7MPNEfmalgdcwct1IIKOse1qoZ2FeQsv4fokA5qaRmSu7rqFjW71IYSVIXHeAazIFb_pjvxuw9sx_n-0XyQiyfsJnMFYhbLw9sxUgwGVlSl93TcYJ2Pbw0NsXIQA5N9onVcS6Cs-qB6k7ZUxOdB7ezqOTC4zue6WYXZZhz88RXHiQ/s64/Ascension_Spore_Spread.webp",
          desc: "強化群體傳播能力",
        },
        //覺醒分支二
        靈植強化: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjl4AD7Xr8W1Vd1JfXq_xxQNHpZ84JumPUiq7Tai0kAyMu78BeKn92WeoGiszZfCVVk_1VuGWfkAPXYFT29IdRhiEuyKCpztDqY7iLmu4eTUhdXJa8VTINgi_3sEKK4JlGv7mvxRYxUCLQhg68l4hIQ5jnbhWgURulLN_u7pniDlFpwRWjcR-kXv2Y0rCw/s64/Ascension_Spirit_Enhancement.webp",
          desc: "提升木靈基礎傷害",
        },
        雨後春筍: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnThXDeUxFjnBf7Nvu_i2MwsUnuHQ8OFGsmnRUPQMgeMLjiuKWROhqoX6YxlR0guccw0RCitUaSuWNVtWnkpH14J34KGhlPjR4g0_QSZCXVSpgJDYNjuxYUNh1DfywKIQeWbq6PFm6T1Sts8nAdoLVzzD_HRoNfeFXZdaVODiNvwpe3_qb_g-m4-ODi6Y/s64/Ascension_Vernal_Emergence.webp",
          desc: "減輕冷卻壓力",
        },
        生意盎然: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiK2yqAOoJc6OKR4rTZPoe1GzjXn376LVSpNpwIiGp0AKGv5GUF6tmzeui4RegvOZtIvSp1TVbS7jDcJpGQwfLr5DD45DkNKVNGYBQVB1CIVi5XX4R6NWM_urHbC-mTR-bHCbjf2m9_YY9gh9UOhFCzXiQRmUXbVSHroLRDu8YkTACjGPVUIVhJLX7Qjho/s64/Ascension_Vitality_Surge.webp",
          desc: "疊加型增傷",
        },
        枝繁葉茂: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiB70Pu-E7giJcJy-97RMpjPeNqsH4DnUxLr1orCcnpEwkdHWIMYySPOd_PYNWHeu0gEiOFSD9D4WGJxBB_Iw-bmpU0P5w8jkzcqY3nIZOoqY21k_PwyXt0eaZbVgeVDWDQmnmE6p7dtdxHpQNpTnas6kEs1rnZ7x3L6PjjAL5-NcYbz4sm1gfKaDHwWgk/s64/Ascension_Lush_Foliage.webp",
          desc: "強化木靈生存與範圍",
        },
        靈植庇護: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRody-MgAP9xONxYsgZo0ARl1LSCOKltZb2Ifj-joEf8d0q3p344aSHFgDLY5EH2u4DCRrvdWiL6SVAuVbqALmTdrVEhAvHue2JT73aPtFfhR0bi0SdIKQYBtpOizGlWfwg_s18C1rED4Z20hrcUNeZE2raJIdY_4wd-fwyGOFT3-8GE-8vyP2LNaPtoY/s64/Ascension_Guardian_Spirit.webp",
          desc: "護盾回復與免死機制",
        },
        森林領域: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUr-_cQ_gCBuSHRBZ1yr93SXg9vXxfnCJn1IWIJML8dY83UkrVruXFV4qI51AxGwoO8he-8iU7Az9AwD1UcRNkvUN0JIE-oDWd48S0TwTlxi9-TAZhcjmWS2yjHFnNvRGs5NLfNPx679C9dQZX-IsZ1Wgw-MUgnL7EAPVamiLULoG3aevArvrItI2ucI4/s64/Ascension_Forest_Domain.webp",
          desc: "提升領域內異常機率",
        },
        //覺醒分支三
        深度腐蝕: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKLvjg2VbeVX3dCe6sjkC79t8ND93GSn2u8mo3FmymJE_g2-HpkRx6a4axT09bBw_DWiM4GMRzU8nNmmxGIzMG8iBXg6C2AlBZtBwlueS9EDfE5pgbgX3gnkHN76khWoTeEYYzEk6v2EHxasGlN12oSbX8QONjoWQHpZ2euza-bfnrourG_TZnXhRJm9g/s64/Ascension_Deep_Corrosion.webp",
          desc: "強化腐蝕與減速",
        },
        柳暗花明: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia2B1gKkCgyAwH1-eb4MAv_UFoUv2nx9ZVJsTFtxuwF0NYe4if1j3MhQ1xkCULtnmqbulWSxlYPCz-xD8egKFYQ5c9wbqhDs0G6zJm0wv90RMdPbx0FpqBCvn5lHVS8aBl68rHESYwWME99opwma3DsC6Z24IxJGzh9L7U_7CW5ddbGuIV-JuTGxF2oWs/s64/Ascension_New_Dawn.webp",
          desc: "武器資源返還機制",
        },
        能源回收: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgg3jSenrSSvUCsn0x8UiAZo1svgCFLS_F1QsC3p2TfJSn2mmPKeMCA4eofcOr2DhPPlyehQHN15zqH0lZ27AF2uZfPLZYjmi4uHxbTFKX_uJcvj52N2pdnzU00FqD1F0XHS8n1_Pa_xMdSA1zwsWkrNIU4sk2jAPpFh6N9Z5-UCgo-lpeFsVp9x8xD5zo/s64/Ascension_Energy_Recall.webp",
          desc: "提升幸運一擊機率",
        },
        荊棘密布: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjV9LVQaNOwEPGeRrIjefMnLm9mOY2W61ySWCk_eZn-INVmrZWZhgMGAiNAl22ZIw12cfU7dnKIvS2iHUJiSncwz1CeGXL257WiN6b2BcmvDSBnJQ9ajWuJiNav8oOOIkQNMhSvt5FljU3-ZhIBqLxBqUe6W0MJU2wCykZ_L50sUkQoik-8vM-wQnp_ftY/s64/Ascension_Thornfield.webp",
          desc: "減速狀態增傷",
        },
        自然屏障: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhulrHMKJS3vf4qEn4eiGlGNgFQ4AJT9vAqfcd0HGWMgSkMa72CVuwnD-fDYsh9bcLvHWwoMIUanQ1IosQnWjsD4FQ9FBe_4N1DAKVXZ8_6ASVUdE8ep_wyN4OfNoBFADmPxurZVin6nvHWvAnKejZlSFzyjyWsUQ56g2suy-O1PNJ1-2jaE5b6eFPdgY/s64/Ascension_Natural_Shield.webp",
          desc: "展開領域抵擋彈道",
        },
        法力轉化: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEge8BWfhalWIDtRcmP2EPpS3w_RYO3qgt4kL9nrqHWhTc-TQVrM3P8TbCt58Ha1h0PGWWPKM32tJt3OEKEAW8PUCHdgpvW-4lw6B7oQStDSHwaY11zjGSg6qSeXzBj9zm8oWJO88o7v-eFcjDO9U5BhAXFPdDevI_0jSN5_-wQymL9E1PWLSWYhoLKUAFE/s64/Ascension_Mana_Convert.webp",
          desc: "大幅強化法杖輸出",
        },
      },
      blessings: {
        心有靈犀: {
          img: "https://placehold.co/150x150/111/ff8c00?text=心有靈犀",
          desc: "SYS_LOG: 小玖未倒地時，鐵翼也不會倒地。鐵翼每擁有1點生命上限，其傷害就會增加1%。",
        },
        火力覆蓋: {
          img: "https://placehold.co/150x150/111/ff8c00?text=火力覆蓋",
          desc: "SYS_LOG: 小玖和鐵翼的飛彈每造成一次傷害，都會使飛彈基礎傷害增加40%。次要技能與火力模式專屬，改版後還能觸發超大範圍的核彈打擊效果。",
        },
        戰鬥核心: {
          img: "https://placehold.co/150x150/111/ff8c00?text=戰鬥核心",
          desc: "SYS_LOG: 鐵翼的屬性（生命、攻速、範圍、傷害）會隨著小玖自身的生命值提升。無論是在衝擊模式還是火力模式下都能發揮極大作用。",
        },
        同舟共濟: {
          img: "https://placehold.co/150x150/111/ff8c00?text=同舟共濟",
          desc: "SYS_LOG: 武器流核心靈佑。武器傷害增加100%且幸運一擊機率+50%，讓小玖在前期能平滑過渡，配合相關武器覺醒可擁有極強的作戰能力。",
        },
      },
    },
    凜: {
      Role: {
        凜: {
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk4iDscRNmai25GhgfFPLXp0Hh5TWLj4sCCeuZj5iovsZXVPQEkQwoF-QERoM8nT06c07rXC5RiBL87JB9EJtRLdZAOEt7FsdRSGwb2PTTmOfs54vN14_zXzLHnKjEKBR6pGQA5juOKbEofim0whgtIDacs4_XcPg2iMmx6fZ8JswBON8vx-f6q-7nwEg/s788/youyou.webp",
        },
      },
      skills: {
        霜葬: {
          img: "https://placehold.co/100x100/111/ffcc00?text=霜葬",
          desc: "匯聚霜雪之力，對目標造成700點普通傷害，且目標的【終結線】越高則傷害越高。若目標的生命總值低於【終結線】，則會對其進行【終結】。霜葬的目標處於可【終結】或失衡狀態時，後續還會造成隨距離遞減的範圍傷害。",
        },
        霜凍手榴彈: {
          img: "https://placehold.co/100x100/111/ffcc00?text=霜凍手榴彈",
          desc: "投擲擁有寒氣的手榴彈，在觸碰敵人或阻擋時造成5公尺的爆炸，對範圍內的敵人造成500點普通傷害並賦予其2秒的遲緩效果。",
        },
      },
      talents: {
        極寒入侵: {
          img: "https://placehold.co/100x100/111/00e5ff?text=極寒入侵",
          desc: "武器命中“破綻”時，【終結線】越高則幸運一擊機率越高。敵人每失衡1次，【終結線】的初始位置提高20%。",
        },
        寒脈淬體: {
          img: "https://placehold.co/100x100/111/00e5ff?text=寒脈淬體",
          desc: "每有1%的傷害抗性，則武器和技能傷害增加1%；每有-1%的傷害抗性，則武器和技能傷害增加2%。",
        },
        化雪凝冰: {
          img: "https://placehold.co/100x100/111/00e5ff?text=化雪凝冰",
          desc: "霜凍手榴彈對敵人造成傷害後，該敵人會立即刷新1個“破綻”。",
        },
        冰心見微: {
          img: "https://placehold.co/100x100/111/00e5ff?text=冰心見微",
          desc: "每次釋放霜葬疊加一層層數，成功處決額外疊加兩層，當層數達到180/360時，提高100%/200%失衡機率並且縮短技能的釋放時間。",
        },
        寒氣外溢: {
          img: "https://placehold.co/100x100/111/00e5ff?text=寒氣外溢",
          desc: "【終結】目標後，根據終結傷害的溢出比例提高當次的範圍傷害，並返還霜葬40%的冷卻時間。",
        },
      },
      ascensions: {
        //覺醒分支一
        蠱術精進: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinYYoy5_5DvOowGgm66vIU_-oQDaJcQY31cTDViD_t2yI_x8E7thU3DQ3ldYpQuLEQdK-tbtQnmLK_nKjqkVgOeCxRKXm-gYAvGw0wOqSofP07yh6cwN9JbgIfb2aJ2zGJ-tFY7sgDIyeel771hgOK2tu4idrWS4_Y6ZIQcLvWHGYQGRgkdJErTx2wAP0/s64/Ascension_Parasite_Mastery.webp",
          desc: "寄生流核心增傷",
        },
        呼朋引伴: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXGC_rtwnHMX4oAvPbv9L7Nz48fFHL4BX_DKqvfnr_eIfV7WS7sSbx6u0nzl6K1WInHzAyu4XC6zpcMYstwVL2p0uCfLjuEtQOeBncEtK3hWLQ12raOeNsSFlOMo2Istbw1wuB2wEFyC2TtmzBgT_TghG1Dx2mXs2GqzD1gLcHNvuFdxpHRPj9Lm2NbdA/s64/Ascension_Allies_Summon.webp",
          desc: "靈氣連接選擇優先度高",
        },
        迅猛侵蝕: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhC8dqbeTEDb-uVSwVNHAtBAscMqdfab0s1SM0aVWQqRcrVhnGtLJCvIJ4IsnEPoeHSqFTQ8_m_G0YrGLVWi_pjBaJXpJ1M7AqLpXQjzb66LNy-vFws3kFFARb_S1vf2q7w0jIesbdDKOEUOKhlQCPiLHLfTZsn7j_aa7YksoJqPUacR1iogeKeS_5uxHw/s64/Ascension_Rapid_Decay.webp",
          desc: "高頻觸發次要傷害",
        },
        自然輪迴: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4lN3_G4951fseyYOC4ZDdvGhrIDzM3lu3sU9X7WuWb3zRh4X6hvpdogbE1Q2U5Upfo6g_lTWJlH_Fwg1ZarpFiTeF3vWgqQU4Lf6gINQj6fpgIFSYzBrU53jYR8-e8k5fEDR_8L7j1Y9tQppRhY-TyzB7ye_eXP1vsTYdX_deX_1PaE9orcakDVjRZaQ/s64/Ascension_Nature_Reincarnation.webp",
          desc: "機率性控場與增傷",
        },
        森林餽贈: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwb6WYGDVpUSVggpgSbZT-m7RbGrxkHztlnEu4wKhoqqgkVUwmsWkVaLIqPZpx6lCE7GB8cI8L0j7-e-hdt0HlAoEue42Geh4eNa2HVWgwahAr8QB50upVhm9h6bvrHJUBpJAVqEHzuhv4kjDMEbjVtRZtU8CghEgFBcTruLGY56BiNYcQsdQIFrCfwwk/s64/Ascension_Forest_Boon.webp",
          desc: "次要技能補給",
        },
        孢塵擴散: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9q2gstcS1dLI5py7MPNEfmalgdcwct1IIKOse1qoZ2FeQsv4fokA5qaRmSu7rqFjW71IYSVIXHeAazIFb_pjvxuw9sx_n-0XyQiyfsJnMFYhbLw9sxUgwGVlSl93TcYJ2Pbw0NsXIQA5N9onVcS6Cs-qB6k7ZUxOdB7ezqOTC4zue6WYXZZhz88RXHiQ/s64/Ascension_Spore_Spread.webp",
          desc: "強化群體傳播能力",
        },
        //覺醒分支二
        靈植強化: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjl4AD7Xr8W1Vd1JfXq_xxQNHpZ84JumPUiq7Tai0kAyMu78BeKn92WeoGiszZfCVVk_1VuGWfkAPXYFT29IdRhiEuyKCpztDqY7iLmu4eTUhdXJa8VTINgi_3sEKK4JlGv7mvxRYxUCLQhg68l4hIQ5jnbhWgURulLN_u7pniDlFpwRWjcR-kXv2Y0rCw/s64/Ascension_Spirit_Enhancement.webp",
          desc: "提升木靈基礎傷害",
        },
        雨後春筍: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnThXDeUxFjnBf7Nvu_i2MwsUnuHQ8OFGsmnRUPQMgeMLjiuKWROhqoX6YxlR0guccw0RCitUaSuWNVtWnkpH14J34KGhlPjR4g0_QSZCXVSpgJDYNjuxYUNh1DfywKIQeWbq6PFm6T1Sts8nAdoLVzzD_HRoNfeFXZdaVODiNvwpe3_qb_g-m4-ODi6Y/s64/Ascension_Vernal_Emergence.webp",
          desc: "減輕冷卻壓力",
        },
        生意盎然: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiK2yqAOoJc6OKR4rTZPoe1GzjXn376LVSpNpwIiGp0AKGv5GUF6tmzeui4RegvOZtIvSp1TVbS7jDcJpGQwfLr5DD45DkNKVNGYBQVB1CIVi5XX4R6NWM_urHbC-mTR-bHCbjf2m9_YY9gh9UOhFCzXiQRmUXbVSHroLRDu8YkTACjGPVUIVhJLX7Qjho/s64/Ascension_Vitality_Surge.webp",
          desc: "疊加型增傷",
        },
        枝繁葉茂: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiB70Pu-E7giJcJy-97RMpjPeNqsH4DnUxLr1orCcnpEwkdHWIMYySPOd_PYNWHeu0gEiOFSD9D4WGJxBB_Iw-bmpU0P5w8jkzcqY3nIZOoqY21k_PwyXt0eaZbVgeVDWDQmnmE6p7dtdxHpQNpTnas6kEs1rnZ7x3L6PjjAL5-NcYbz4sm1gfKaDHwWgk/s64/Ascension_Lush_Foliage.webp",
          desc: "強化木靈生存與範圍",
        },
        靈植庇護: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRody-MgAP9xONxYsgZo0ARl1LSCOKltZb2Ifj-joEf8d0q3p344aSHFgDLY5EH2u4DCRrvdWiL6SVAuVbqALmTdrVEhAvHue2JT73aPtFfhR0bi0SdIKQYBtpOizGlWfwg_s18C1rED4Z20hrcUNeZE2raJIdY_4wd-fwyGOFT3-8GE-8vyP2LNaPtoY/s64/Ascension_Guardian_Spirit.webp",
          desc: "護盾回復與免死機制",
        },
        森林領域: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUr-_cQ_gCBuSHRBZ1yr93SXg9vXxfnCJn1IWIJML8dY83UkrVruXFV4qI51AxGwoO8he-8iU7Az9AwD1UcRNkvUN0JIE-oDWd48S0TwTlxi9-TAZhcjmWS2yjHFnNvRGs5NLfNPx679C9dQZX-IsZ1Wgw-MUgnL7EAPVamiLULoG3aevArvrItI2ucI4/s64/Ascension_Forest_Domain.webp",
          desc: "提升領域內異常機率",
        },
        //覺醒分支三
        深度腐蝕: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKLvjg2VbeVX3dCe6sjkC79t8ND93GSn2u8mo3FmymJE_g2-HpkRx6a4axT09bBw_DWiM4GMRzU8nNmmxGIzMG8iBXg6C2AlBZtBwlueS9EDfE5pgbgX3gnkHN76khWoTeEYYzEk6v2EHxasGlN12oSbX8QONjoWQHpZ2euza-bfnrourG_TZnXhRJm9g/s64/Ascension_Deep_Corrosion.webp",
          desc: "強化腐蝕與減速",
        },
        柳暗花明: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia2B1gKkCgyAwH1-eb4MAv_UFoUv2nx9ZVJsTFtxuwF0NYe4if1j3MhQ1xkCULtnmqbulWSxlYPCz-xD8egKFYQ5c9wbqhDs0G6zJm0wv90RMdPbx0FpqBCvn5lHVS8aBl68rHESYwWME99opwma3DsC6Z24IxJGzh9L7U_7CW5ddbGuIV-JuTGxF2oWs/s64/Ascension_New_Dawn.webp",
          desc: "武器資源返還機制",
        },
        能源回收: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgg3jSenrSSvUCsn0x8UiAZo1svgCFLS_F1QsC3p2TfJSn2mmPKeMCA4eofcOr2DhPPlyehQHN15zqH0lZ27AF2uZfPLZYjmi4uHxbTFKX_uJcvj52N2pdnzU00FqD1F0XHS8n1_Pa_xMdSA1zwsWkrNIU4sk2jAPpFh6N9Z5-UCgo-lpeFsVp9x8xD5zo/s64/Ascension_Energy_Recall.webp",
          desc: "提升幸運一擊機率",
        },
        荊棘密布: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjV9LVQaNOwEPGeRrIjefMnLm9mOY2W61ySWCk_eZn-INVmrZWZhgMGAiNAl22ZIw12cfU7dnKIvS2iHUJiSncwz1CeGXL257WiN6b2BcmvDSBnJQ9ajWuJiNav8oOOIkQNMhSvt5FljU3-ZhIBqLxBqUe6W0MJU2wCykZ_L50sUkQoik-8vM-wQnp_ftY/s64/Ascension_Thornfield.webp",
          desc: "減速狀態增傷",
        },
        自然屏障: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhulrHMKJS3vf4qEn4eiGlGNgFQ4AJT9vAqfcd0HGWMgSkMa72CVuwnD-fDYsh9bcLvHWwoMIUanQ1IosQnWjsD4FQ9FBe_4N1DAKVXZ8_6ASVUdE8ep_wyN4OfNoBFADmPxurZVin6nvHWvAnKejZlSFzyjyWsUQ56g2suy-O1PNJ1-2jaE5b6eFPdgY/s64/Ascension_Natural_Shield.webp",
          desc: "展開領域抵擋彈道",
        },
        法力轉化: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEge8BWfhalWIDtRcmP2EPpS3w_RYO3qgt4kL9nrqHWhTc-TQVrM3P8TbCt58Ha1h0PGWWPKM32tJt3OEKEAW8PUCHdgpvW-4lw6B7oQStDSHwaY11zjGSg6qSeXzBj9zm8oWJO88o7v-eFcjDO9U5BhAXFPdDevI_0jSN5_-wQymL9E1PWLSWYhoLKUAFE/s64/Ascension_Mana_Convert.webp",
          desc: "大幅強化法杖輸出",
        },
      },
      blessings: {
        霜賜解脫: {
          img: "https://placehold.co/150x150/111/ff8c00?text=霜賜解脫",
          desc: "SYS_LOG: 霜葬的最終傷害提高50%。目標處於失衡或生命總值低於【終結線】時，會對額外1名敵人造成1次霜葬傷害。",
        },
        雪上加霜: {
          img: "https://placehold.co/150x150/111/ff8c00?text=雪上加霜",
          desc: "SYS_LOG: 敵人的“破綻”上限+1，“破綻”的生成間隔減少50%，失衡機率降低60%。命中“破綻”後，目標的其他“破綻”會受到50%的武器傷害。",
        },
        冰破殘響: {
          img: "https://placehold.co/150x150/111/ff8c00?text=冰破殘響",
          desc: "SYS_LOG: 霜凍手榴彈爆炸時有100%的機率隨機擊碎範圍內的1個“破綻”並造成額外爆炸。每額外爆炸1次，觸發機率、傷害和爆炸範圍減半。",
        },
        嚴寒沁髓: {
          img: "https://placehold.co/150x150/111/ff8c00?text=嚴寒沁髓",
          desc: "SYS_LOG: 對敵人造成傷害時有13%的機率使其進入失衡狀態。對失衡敵人造成的最終傷害提高50%。",
        },
      },
    },
    墨咻: {
      Role: {
        呦呦: {
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk4iDscRNmai25GhgfFPLXp0Hh5TWLj4sCCeuZj5iovsZXVPQEkQwoF-QERoM8nT06c07rXC5RiBL87JB9EJtRLdZAOEt7FsdRSGwb2PTTmOfs54vN14_zXzLHnKjEKBR6pGQA5juOKbEofim0whgtIDacs4_XcPg2iMmx6fZ8JswBON8vx-f6q-7nwEg/s788/youyou.webp",
        },
      },
      skills: {
        靈墨化形: {
          img: "https://placehold.co/100x100/111/ffcc00?text=靈墨化形",
          desc: "化身墨靈，持續16秒。此時場內會生成2顆墨珠，拾取後可增加10點“墨韻”。可消耗15點“墨韻”釋放【墨鋒四散】，對自身周圍5公尺範圍的所有敵人造成450點濁墨傷害。",
        },
        揮墨成卷: {
          img: "https://placehold.co/100x100/111/ffcc00?text=揮墨成卷",
          desc: "向前揮出一副墨卷，推進15公尺，可阻擋敵方投射物，命中敵人可造成500點普通傷害並擊退自身5公尺範圍內的普通敵人。墨卷沿途會生成【清域】，持續10秒。墨卷的推進速度受自身移動速度影響。",
        },
      },
      talents: {
        墨韻悠揚: {
          img: "https://placehold.co/100x100/111/00e5ff?text=墨韻悠揚",
          desc: "“墨韻”每變化5點，移動速度增加4%，持續12秒，最高15層。墨靈狀態下，該天賦的移速加成翻倍。",
        },
        靈墨交融: {
          img: "https://placehold.co/100x100/111/00e5ff?text=靈墨交融",
          desc: "【墨鋒四散】的基礎傷害+150，墨靈化身期間每拾取1顆墨珠，變身持續時間回復3秒。",
        },
        墨御護體: {
          img: "https://placehold.co/100x100/111/00e5ff?text=墨御護體",
          desc: "護盾上限+20。護盾值為100%時，傷害抗性增加30%。",
        },
        靈犀共鑒: {
          img: "https://placehold.co/100x100/111/00e5ff?text=靈犀共鑒",
          desc: "獲得擁有武器技能的武器時，專屬銘刻出現的機率提高60%。",
        },
        臨摹之力: {
          img: "https://placehold.co/100x100/111/00e5ff?text=臨摹之力",
          desc: "當覺醒的總等級不低於6級時，可在英雄界面選擇1個已啟用的覺醒提升1級。",
        },
      },
      ascensions: {
        //覺醒分支一
        蠱術精進: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinYYoy5_5DvOowGgm66vIU_-oQDaJcQY31cTDViD_t2yI_x8E7thU3DQ3ldYpQuLEQdK-tbtQnmLK_nKjqkVgOeCxRKXm-gYAvGw0wOqSofP07yh6cwN9JbgIfb2aJ2zGJ-tFY7sgDIyeel771hgOK2tu4idrWS4_Y6ZIQcLvWHGYQGRgkdJErTx2wAP0/s64/Ascension_Parasite_Mastery.webp",
          desc: "寄生流核心增傷",
        },
        呼朋引伴: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXGC_rtwnHMX4oAvPbv9L7Nz48fFHL4BX_DKqvfnr_eIfV7WS7sSbx6u0nzl6K1WInHzAyu4XC6zpcMYstwVL2p0uCfLjuEtQOeBncEtK3hWLQ12raOeNsSFlOMo2Istbw1wuB2wEFyC2TtmzBgT_TghG1Dx2mXs2GqzD1gLcHNvuFdxpHRPj9Lm2NbdA/s64/Ascension_Allies_Summon.webp",
          desc: "靈氣連接選擇優先度高",
        },
        迅猛侵蝕: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhC8dqbeTEDb-uVSwVNHAtBAscMqdfab0s1SM0aVWQqRcrVhnGtLJCvIJ4IsnEPoeHSqFTQ8_m_G0YrGLVWi_pjBaJXpJ1M7AqLpXQjzb66LNy-vFws3kFFARb_S1vf2q7w0jIesbdDKOEUOKhlQCPiLHLfTZsn7j_aa7YksoJqPUacR1iogeKeS_5uxHw/s64/Ascension_Rapid_Decay.webp",
          desc: "高頻觸發次要傷害",
        },
        自然輪迴: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4lN3_G4951fseyYOC4ZDdvGhrIDzM3lu3sU9X7WuWb3zRh4X6hvpdogbE1Q2U5Upfo6g_lTWJlH_Fwg1ZarpFiTeF3vWgqQU4Lf6gINQj6fpgIFSYzBrU53jYR8-e8k5fEDR_8L7j1Y9tQppRhY-TyzB7ye_eXP1vsTYdX_deX_1PaE9orcakDVjRZaQ/s64/Ascension_Nature_Reincarnation.webp",
          desc: "機率性控場與增傷",
        },
        森林餽贈: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwb6WYGDVpUSVggpgSbZT-m7RbGrxkHztlnEu4wKhoqqgkVUwmsWkVaLIqPZpx6lCE7GB8cI8L0j7-e-hdt0HlAoEue42Geh4eNa2HVWgwahAr8QB50upVhm9h6bvrHJUBpJAVqEHzuhv4kjDMEbjVtRZtU8CghEgFBcTruLGY56BiNYcQsdQIFrCfwwk/s64/Ascension_Forest_Boon.webp",
          desc: "次要技能補給",
        },
        孢塵擴散: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9q2gstcS1dLI5py7MPNEfmalgdcwct1IIKOse1qoZ2FeQsv4fokA5qaRmSu7rqFjW71IYSVIXHeAazIFb_pjvxuw9sx_n-0XyQiyfsJnMFYhbLw9sxUgwGVlSl93TcYJ2Pbw0NsXIQA5N9onVcS6Cs-qB6k7ZUxOdB7ezqOTC4zue6WYXZZhz88RXHiQ/s64/Ascension_Spore_Spread.webp",
          desc: "強化群體傳播能力",
        },
        //覺醒分支二
        靈植強化: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjl4AD7Xr8W1Vd1JfXq_xxQNHpZ84JumPUiq7Tai0kAyMu78BeKn92WeoGiszZfCVVk_1VuGWfkAPXYFT29IdRhiEuyKCpztDqY7iLmu4eTUhdXJa8VTINgi_3sEKK4JlGv7mvxRYxUCLQhg68l4hIQ5jnbhWgURulLN_u7pniDlFpwRWjcR-kXv2Y0rCw/s64/Ascension_Spirit_Enhancement.webp",
          desc: "提升木靈基礎傷害",
        },
        雨後春筍: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnThXDeUxFjnBf7Nvu_i2MwsUnuHQ8OFGsmnRUPQMgeMLjiuKWROhqoX6YxlR0guccw0RCitUaSuWNVtWnkpH14J34KGhlPjR4g0_QSZCXVSpgJDYNjuxYUNh1DfywKIQeWbq6PFm6T1Sts8nAdoLVzzD_HRoNfeFXZdaVODiNvwpe3_qb_g-m4-ODi6Y/s64/Ascension_Vernal_Emergence.webp",
          desc: "減輕冷卻壓力",
        },
        生意盎然: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiK2yqAOoJc6OKR4rTZPoe1GzjXn376LVSpNpwIiGp0AKGv5GUF6tmzeui4RegvOZtIvSp1TVbS7jDcJpGQwfLr5DD45DkNKVNGYBQVB1CIVi5XX4R6NWM_urHbC-mTR-bHCbjf2m9_YY9gh9UOhFCzXiQRmUXbVSHroLRDu8YkTACjGPVUIVhJLX7Qjho/s64/Ascension_Vitality_Surge.webp",
          desc: "疊加型增傷",
        },
        枝繁葉茂: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiB70Pu-E7giJcJy-97RMpjPeNqsH4DnUxLr1orCcnpEwkdHWIMYySPOd_PYNWHeu0gEiOFSD9D4WGJxBB_Iw-bmpU0P5w8jkzcqY3nIZOoqY21k_PwyXt0eaZbVgeVDWDQmnmE6p7dtdxHpQNpTnas6kEs1rnZ7x3L6PjjAL5-NcYbz4sm1gfKaDHwWgk/s64/Ascension_Lush_Foliage.webp",
          desc: "強化木靈生存與範圍",
        },
        靈植庇護: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRody-MgAP9xONxYsgZo0ARl1LSCOKltZb2Ifj-joEf8d0q3p344aSHFgDLY5EH2u4DCRrvdWiL6SVAuVbqALmTdrVEhAvHue2JT73aPtFfhR0bi0SdIKQYBtpOizGlWfwg_s18C1rED4Z20hrcUNeZE2raJIdY_4wd-fwyGOFT3-8GE-8vyP2LNaPtoY/s64/Ascension_Guardian_Spirit.webp",
          desc: "護盾回復與免死機制",
        },
        森林領域: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUr-_cQ_gCBuSHRBZ1yr93SXg9vXxfnCJn1IWIJML8dY83UkrVruXFV4qI51AxGwoO8he-8iU7Az9AwD1UcRNkvUN0JIE-oDWd48S0TwTlxi9-TAZhcjmWS2yjHFnNvRGs5NLfNPx679C9dQZX-IsZ1Wgw-MUgnL7EAPVamiLULoG3aevArvrItI2ucI4/s64/Ascension_Forest_Domain.webp",
          desc: "提升領域內異常機率",
        },
        //覺醒分支三
        深度腐蝕: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKLvjg2VbeVX3dCe6sjkC79t8ND93GSn2u8mo3FmymJE_g2-HpkRx6a4axT09bBw_DWiM4GMRzU8nNmmxGIzMG8iBXg6C2AlBZtBwlueS9EDfE5pgbgX3gnkHN76khWoTeEYYzEk6v2EHxasGlN12oSbX8QONjoWQHpZ2euza-bfnrourG_TZnXhRJm9g/s64/Ascension_Deep_Corrosion.webp",
          desc: "強化腐蝕與減速",
        },
        柳暗花明: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia2B1gKkCgyAwH1-eb4MAv_UFoUv2nx9ZVJsTFtxuwF0NYe4if1j3MhQ1xkCULtnmqbulWSxlYPCz-xD8egKFYQ5c9wbqhDs0G6zJm0wv90RMdPbx0FpqBCvn5lHVS8aBl68rHESYwWME99opwma3DsC6Z24IxJGzh9L7U_7CW5ddbGuIV-JuTGxF2oWs/s64/Ascension_New_Dawn.webp",
          desc: "武器資源返還機制",
        },
        能源回收: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgg3jSenrSSvUCsn0x8UiAZo1svgCFLS_F1QsC3p2TfJSn2mmPKeMCA4eofcOr2DhPPlyehQHN15zqH0lZ27AF2uZfPLZYjmi4uHxbTFKX_uJcvj52N2pdnzU00FqD1F0XHS8n1_Pa_xMdSA1zwsWkrNIU4sk2jAPpFh6N9Z5-UCgo-lpeFsVp9x8xD5zo/s64/Ascension_Energy_Recall.webp",
          desc: "提升幸運一擊機率",
        },
        荊棘密布: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjV9LVQaNOwEPGeRrIjefMnLm9mOY2W61ySWCk_eZn-INVmrZWZhgMGAiNAl22ZIw12cfU7dnKIvS2iHUJiSncwz1CeGXL257WiN6b2BcmvDSBnJQ9ajWuJiNav8oOOIkQNMhSvt5FljU3-ZhIBqLxBqUe6W0MJU2wCykZ_L50sUkQoik-8vM-wQnp_ftY/s64/Ascension_Thornfield.webp",
          desc: "減速狀態增傷",
        },
        自然屏障: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhulrHMKJS3vf4qEn4eiGlGNgFQ4AJT9vAqfcd0HGWMgSkMa72CVuwnD-fDYsh9bcLvHWwoMIUanQ1IosQnWjsD4FQ9FBe_4N1DAKVXZ8_6ASVUdE8ep_wyN4OfNoBFADmPxurZVin6nvHWvAnKejZlSFzyjyWsUQ56g2suy-O1PNJ1-2jaE5b6eFPdgY/s64/Ascension_Natural_Shield.webp",
          desc: "展開領域抵擋彈道",
        },
        法力轉化: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEge8BWfhalWIDtRcmP2EPpS3w_RYO3qgt4kL9nrqHWhTc-TQVrM3P8TbCt58Ha1h0PGWWPKM32tJt3OEKEAW8PUCHdgpvW-4lw6B7oQStDSHwaY11zjGSg6qSeXzBj9zm8oWJO88o7v-eFcjDO9U5BhAXFPdDevI_0jSN5_-wQymL9E1PWLSWYhoLKUAFE/s64/Ascension_Mana_Convert.webp",
          desc: "大幅強化法杖輸出",
        },
      },
      blessings: {
        韻影交融: {
          img: "https://placehold.co/150x150/111/ff8c00?text=韻影交融",
          desc: "SYS_LOG: “墨韻”上限+30。每有1點“墨韻”，武器傷害增加5%，幸運一擊機率+1%。自身處於【清域】時，每秒額外獲得2點“墨韻”和2點武器技能的資源。對敵人造成傷害後，立即獲得20點“墨韻”（僅在戰鬥狀態下觸發1次，脫離戰鬥後恢復可觸發次數）。",
        },
        染墨新生: {
          img: "https://placehold.co/150x150/111/ff8c00?text=染墨新生",
          desc: "SYS_LOG: 濁墨最終傷害提高200%。釋放【墨鋒四散】需要消耗更多的“墨韻”，最多消耗30點，每額外消耗1點會使最終傷害提高40%。每秒自動獲得1層狀態，拾取墨珠可獲得1層，最多24層。釋放靈墨化形可消耗24層，獲得15點“墨韻”，並額外生成1波墨珠。",
        },
        韻溢墨湧: {
          img: "https://placehold.co/150x150/111/ff8c00?text=韻溢墨湧",
          desc: "SYS_LOG: 每擁有1點護盾上限，揮墨成卷的基礎傷害增加2%。當“墨韻”超過20點時消耗20點“墨韻”自動向最近的敵人釋放一次揮墨成卷，該次技能造成的最終傷害提高300%，並使接下來12秒內“墨韻”的獲取量增加100%。",
        },
        馳墨滌魂: {
          img: "https://placehold.co/150x150/111/ff8c00?text=馳墨滌魂",
          desc: "SYS_LOG: 【濁域】造成傷害時，最終傷害提高900%並獲得2點“墨韻”，每個敵人3秒內最多觸發1次。自身每擁有30%的移速加成，該靈佑效果提升25%。",
        },
      },
    },
    呦呦: {
      Role: {
        呦呦: {
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk4iDscRNmai25GhgfFPLXp0Hh5TWLj4sCCeuZj5iovsZXVPQEkQwoF-QERoM8nT06c07rXC5RiBL87JB9EJtRLdZAOEt7FsdRSGwb2PTTmOfs54vN14_zXzLHnKjEKBR6pGQA5juOKbEofim0whgtIDacs4_XcPg2iMmx6fZ8JswBON8vx-f6q-7nwEg/s788/youyou.webp",
        },
      },
      skills: {
        木靈召喚: {
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6BzZiYgYbNf9-lxsdi-y7PpMsJ8cMqKMYPT35BeOf1Z8cPSyPB1FsZ7zS-qXLGzSIShvE4hf_s8pEDD4OoJoAt1emQgI-pjYAXYNj_9um7dIDhp7PSFvTyLLBZgGf3u9IWtGz9WK6WNgUipxjIHxpnVj_T85BHRYNy4wlWLseTBMH3v422tfND5kruoQ/s95/Gunfire_Reborn_CuA5fWg713-removebg-preview.webp",
          desc: "生成自然領域，在領域內召喚【木靈】並將一枚種子轉化為【木靈】。【木靈】會自動攻擊敵人並造成腐蝕傷害。",
        },
        森源法球: {
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTSZ4gf9H9NL8Ndpxoq-xuZuKPPwDWemSspmb46S6rpby2GCZPhhk8bhSOclyA7Pdcd08EBtDuJAhLpbf_vz12XRFjEm3uLwv3ANpkde4AK1CRR_0CrRpF3opgXRrhvwNWS-7YMiZBkvAcs460XBUk7Y9FJcdA6Ov0j0ygtOcNX0c5rTl2dZbd2fo-nYQ/s95/Gunfire_Reborn_g7YQPQ8KDd-removebg-preview.webp",
          desc: "投擲森源法球，觸碰敵人時爆炸並留下一枚種子，對範圍內敵人施加 3 層【寄生】層數並立即觸發一次【寄生】。",
        },
      },
      talents: {
        森林寶庫: {
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJjbQgvvNQNihWxGsG-Ly9fGcltymH5Bh8026tGnrlU0pVkLoySpRlwIyuEd5ggNoVpNQtAIVUjjnBrtMibz9ASIetdUD74kSQcOJhSGpfJIwAjoQUezQrPVHfYk-eo96ExA_nD26T6dFzZf7BubawTcjCFaMfTJBYYPM0HNqBVIXqdHLZ6Z_s2kuShw4/s69/Talent_Forest_Vault.webp",
          desc: "每擊敗50個敵人，掉落一把法杖；該法杖有50%機率為腐蝕元素類型，且銘刻數額外+1",
        },
        靈力充盈: {
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqDza6wiftC-7QVmpW3r3Ika7fYZJB09mFfEnNhOoMYceA5FZTPOXtclIhMhfmE0HM0z-yrAcS0Yfrb89PjeSQb4U3ugtcMVL0zcKALBaAGyCb5BiR5CG99TvCdUGLwqgF2kBpxJ5nsCc4gVCOSroaAhq3hBZVS-z_wdMiVsHCzCj-KQTZCau35bU5OZk/s69/Talent_Mana_Overflow.webp",
          desc: "每釋放2次【木靈召喚】，下一次【木靈召喚】額外召喚1隻【木靈】",
        },
        光合作用: {
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghXDIOANBfS0dmJ9RRtG58bt0UTtbESJsXSOrvq6YpdJkxLGxezK-jOyCIYKinvumSjD7tXu1CHkFnyzLmy4wJ5ACwHTljOaSwoKDhvB4eik7ckjvgl_e_3aEiX8VpDmsHrIyDMTEOgN6OoF7cDZueVlepW6NykmsNpPZYcN1KSUOrG3Djwwr6feRMPS0/s69/Talent_Photosynthesis.webp",
          desc: "使用【木靈召喚】時，獲得4點武器技能資源。當種子被轉化為【木靈】時，獲得2點武器技能資源",
        },
        寸草之心: {
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRN5_NCrXwS394Gy4F8Rju7aA3prM43S6CxSpf12vBj2asbQC82LDpc5hCe7UPs8gqYJtCuUBhmNR2r9UmJHLP_OY_oMoRvoGUlazeJKBash2SEv4Mqt-XMG3Z4IItiY9bnUDejK-y1ar4QHZYgGbFR8vqo3BHhz01jguRP589zsC6hvo4iqXotuXR_sg/s69/Talent_Verdant_Heart.webp",
          desc: "場上每有1隻【木靈】或1枚種子，技能傷害增加2%",
        },
        腐蝕親和: {
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjI8UDuwm5j9bY0ENhQoYS4EwJOTyf2TFmR8m9vDAOhxFV93y9kvYcygPb4eAqxZddMnus81YXZCmdKiAWDig1Ak6blohmmDXw3JmCsDwAsBpuYGAVuRSvLs4IkshDFOBjDTmG1jH1m30Y8jcExYiRHEG7UrdVaGRxFkXKS1jlIu18bJkLkKpDE6HYOoBE/s69/Talent_Corrosion_Affinity.webp",
          desc: "造成腐蝕異常的機率提高50%",
        },
      },
      ascensions: {
        //覺醒分支一
        蠱術精進: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinYYoy5_5DvOowGgm66vIU_-oQDaJcQY31cTDViD_t2yI_x8E7thU3DQ3ldYpQuLEQdK-tbtQnmLK_nKjqkVgOeCxRKXm-gYAvGw0wOqSofP07yh6cwN9JbgIfb2aJ2zGJ-tFY7sgDIyeel771hgOK2tu4idrWS4_Y6ZIQcLvWHGYQGRgkdJErTx2wAP0/s64/Ascension_Parasite_Mastery.webp",
          desc: "寄生流核心增傷",
        },
        呼朋引伴: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXGC_rtwnHMX4oAvPbv9L7Nz48fFHL4BX_DKqvfnr_eIfV7WS7sSbx6u0nzl6K1WInHzAyu4XC6zpcMYstwVL2p0uCfLjuEtQOeBncEtK3hWLQ12raOeNsSFlOMo2Istbw1wuB2wEFyC2TtmzBgT_TghG1Dx2mXs2GqzD1gLcHNvuFdxpHRPj9Lm2NbdA/s64/Ascension_Allies_Summon.webp",
          desc: "靈氣連接選擇優先度高",
        },
        迅猛侵蝕: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhC8dqbeTEDb-uVSwVNHAtBAscMqdfab0s1SM0aVWQqRcrVhnGtLJCvIJ4IsnEPoeHSqFTQ8_m_G0YrGLVWi_pjBaJXpJ1M7AqLpXQjzb66LNy-vFws3kFFARb_S1vf2q7w0jIesbdDKOEUOKhlQCPiLHLfTZsn7j_aa7YksoJqPUacR1iogeKeS_5uxHw/s64/Ascension_Rapid_Decay.webp",
          desc: "高頻觸發次要傷害",
        },
        自然輪迴: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4lN3_G4951fseyYOC4ZDdvGhrIDzM3lu3sU9X7WuWb3zRh4X6hvpdogbE1Q2U5Upfo6g_lTWJlH_Fwg1ZarpFiTeF3vWgqQU4Lf6gINQj6fpgIFSYzBrU53jYR8-e8k5fEDR_8L7j1Y9tQppRhY-TyzB7ye_eXP1vsTYdX_deX_1PaE9orcakDVjRZaQ/s64/Ascension_Nature_Reincarnation.webp",
          desc: "機率性控場與增傷",
        },
        森林餽贈: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwb6WYGDVpUSVggpgSbZT-m7RbGrxkHztlnEu4wKhoqqgkVUwmsWkVaLIqPZpx6lCE7GB8cI8L0j7-e-hdt0HlAoEue42Geh4eNa2HVWgwahAr8QB50upVhm9h6bvrHJUBpJAVqEHzuhv4kjDMEbjVtRZtU8CghEgFBcTruLGY56BiNYcQsdQIFrCfwwk/s64/Ascension_Forest_Boon.webp",
          desc: "次要技能補給",
        },
        孢塵擴散: {
          branch: 1,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9q2gstcS1dLI5py7MPNEfmalgdcwct1IIKOse1qoZ2FeQsv4fokA5qaRmSu7rqFjW71IYSVIXHeAazIFb_pjvxuw9sx_n-0XyQiyfsJnMFYhbLw9sxUgwGVlSl93TcYJ2Pbw0NsXIQA5N9onVcS6Cs-qB6k7ZUxOdB7ezqOTC4zue6WYXZZhz88RXHiQ/s64/Ascension_Spore_Spread.webp",
          desc: "強化群體傳播能力",
        },
        //覺醒分支二
        靈植強化: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjl4AD7Xr8W1Vd1JfXq_xxQNHpZ84JumPUiq7Tai0kAyMu78BeKn92WeoGiszZfCVVk_1VuGWfkAPXYFT29IdRhiEuyKCpztDqY7iLmu4eTUhdXJa8VTINgi_3sEKK4JlGv7mvxRYxUCLQhg68l4hIQ5jnbhWgURulLN_u7pniDlFpwRWjcR-kXv2Y0rCw/s64/Ascension_Spirit_Enhancement.webp",
          desc: "提升木靈基礎傷害",
        },
        雨後春筍: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnThXDeUxFjnBf7Nvu_i2MwsUnuHQ8OFGsmnRUPQMgeMLjiuKWROhqoX6YxlR0guccw0RCitUaSuWNVtWnkpH14J34KGhlPjR4g0_QSZCXVSpgJDYNjuxYUNh1DfywKIQeWbq6PFm6T1Sts8nAdoLVzzD_HRoNfeFXZdaVODiNvwpe3_qb_g-m4-ODi6Y/s64/Ascension_Vernal_Emergence.webp",
          desc: "減輕冷卻壓力",
        },
        生意盎然: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiK2yqAOoJc6OKR4rTZPoe1GzjXn376LVSpNpwIiGp0AKGv5GUF6tmzeui4RegvOZtIvSp1TVbS7jDcJpGQwfLr5DD45DkNKVNGYBQVB1CIVi5XX4R6NWM_urHbC-mTR-bHCbjf2m9_YY9gh9UOhFCzXiQRmUXbVSHroLRDu8YkTACjGPVUIVhJLX7Qjho/s64/Ascension_Vitality_Surge.webp",
          desc: "疊加型增傷",
        },
        枝繁葉茂: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiB70Pu-E7giJcJy-97RMpjPeNqsH4DnUxLr1orCcnpEwkdHWIMYySPOd_PYNWHeu0gEiOFSD9D4WGJxBB_Iw-bmpU0P5w8jkzcqY3nIZOoqY21k_PwyXt0eaZbVgeVDWDQmnmE6p7dtdxHpQNpTnas6kEs1rnZ7x3L6PjjAL5-NcYbz4sm1gfKaDHwWgk/s64/Ascension_Lush_Foliage.webp",
          desc: "強化木靈生存與範圍",
        },
        靈植庇護: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRody-MgAP9xONxYsgZo0ARl1LSCOKltZb2Ifj-joEf8d0q3p344aSHFgDLY5EH2u4DCRrvdWiL6SVAuVbqALmTdrVEhAvHue2JT73aPtFfhR0bi0SdIKQYBtpOizGlWfwg_s18C1rED4Z20hrcUNeZE2raJIdY_4wd-fwyGOFT3-8GE-8vyP2LNaPtoY/s64/Ascension_Guardian_Spirit.webp",
          desc: "護盾回復與免死機制",
        },
        森林領域: {
          branch: 2,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUr-_cQ_gCBuSHRBZ1yr93SXg9vXxfnCJn1IWIJML8dY83UkrVruXFV4qI51AxGwoO8he-8iU7Az9AwD1UcRNkvUN0JIE-oDWd48S0TwTlxi9-TAZhcjmWS2yjHFnNvRGs5NLfNPx679C9dQZX-IsZ1Wgw-MUgnL7EAPVamiLULoG3aevArvrItI2ucI4/s64/Ascension_Forest_Domain.webp",
          desc: "提升領域內異常機率",
        },
        //覺醒分支三
        深度腐蝕: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKLvjg2VbeVX3dCe6sjkC79t8ND93GSn2u8mo3FmymJE_g2-HpkRx6a4axT09bBw_DWiM4GMRzU8nNmmxGIzMG8iBXg6C2AlBZtBwlueS9EDfE5pgbgX3gnkHN76khWoTeEYYzEk6v2EHxasGlN12oSbX8QONjoWQHpZ2euza-bfnrourG_TZnXhRJm9g/s64/Ascension_Deep_Corrosion.webp",
          desc: "強化腐蝕與減速",
        },
        柳暗花明: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia2B1gKkCgyAwH1-eb4MAv_UFoUv2nx9ZVJsTFtxuwF0NYe4if1j3MhQ1xkCULtnmqbulWSxlYPCz-xD8egKFYQ5c9wbqhDs0G6zJm0wv90RMdPbx0FpqBCvn5lHVS8aBl68rHESYwWME99opwma3DsC6Z24IxJGzh9L7U_7CW5ddbGuIV-JuTGxF2oWs/s64/Ascension_New_Dawn.webp",
          desc: "武器資源返還機制",
        },
        能源回收: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgg3jSenrSSvUCsn0x8UiAZo1svgCFLS_F1QsC3p2TfJSn2mmPKeMCA4eofcOr2DhPPlyehQHN15zqH0lZ27AF2uZfPLZYjmi4uHxbTFKX_uJcvj52N2pdnzU00FqD1F0XHS8n1_Pa_xMdSA1zwsWkrNIU4sk2jAPpFh6N9Z5-UCgo-lpeFsVp9x8xD5zo/s64/Ascension_Energy_Recall.webp",
          desc: "提升幸運一擊機率",
        },
        荊棘密布: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjV9LVQaNOwEPGeRrIjefMnLm9mOY2W61ySWCk_eZn-INVmrZWZhgMGAiNAl22ZIw12cfU7dnKIvS2iHUJiSncwz1CeGXL257WiN6b2BcmvDSBnJQ9ajWuJiNav8oOOIkQNMhSvt5FljU3-ZhIBqLxBqUe6W0MJU2wCykZ_L50sUkQoik-8vM-wQnp_ftY/s64/Ascension_Thornfield.webp",
          desc: "減速狀態增傷",
        },
        自然屏障: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhulrHMKJS3vf4qEn4eiGlGNgFQ4AJT9vAqfcd0HGWMgSkMa72CVuwnD-fDYsh9bcLvHWwoMIUanQ1IosQnWjsD4FQ9FBe_4N1DAKVXZ8_6ASVUdE8ep_wyN4OfNoBFADmPxurZVin6nvHWvAnKejZlSFzyjyWsUQ56g2suy-O1PNJ1-2jaE5b6eFPdgY/s64/Ascension_Natural_Shield.webp",
          desc: "展開領域抵擋彈道",
        },
        法力轉化: {
          branch: 3,
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEge8BWfhalWIDtRcmP2EPpS3w_RYO3qgt4kL9nrqHWhTc-TQVrM3P8TbCt58Ha1h0PGWWPKM32tJt3OEKEAW8PUCHdgpvW-4lw6B7oQStDSHwaY11zjGSg6qSeXzBj9zm8oWJO88o7v-eFcjDO9U5BhAXFPdDevI_0jSN5_-wQymL9E1PWLSWYhoLKUAFE/s64/Ascension_Mana_Convert.webp",
          desc: "大幅強化法杖輸出",
        },
      },
      blessings: {
        森意灌注: {
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbcGA1lZospqZZsz955BpVyWUloEOqAhAcTpCAhxgwuwAQyUzzfo4sYOuDipIyXly193NrZiAA0xQhY0rvnoYitOlXrgBqJi9kPap7efpJfjk_bzqkN2VrTPDSLHVCkKTfIAR5pL6dyLUMPHU4TLd9AGl8oGziaLdYStZn5-439nWS72aSdv3REiMti4E/s127/ForestInfusion.webp",
          desc: "SYS: 主E流派開局首選",
        },
        草木一芥: {
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2DgZwyprkC6iw_Vbu4NlyhRsUXjP_KE-9S536vrAtGrg8IgHVujCEGO82XdvYuKY855vVm8gTzYAU4H4hrSbYagDXU_6SouMa7VTR5jaF1727jwh4rzv9wiO-3rNyKZo4n0L9BM6bwXLw1NVTVG0s0k1qsZbXXvo2QJmevaDzcNBPcITDqsE77VrCmgw/s127/LeafEssence.webp",
          desc: "SYS: 多人寄生疊層專用",
        },
        靈樞聖域: {
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYfaJ_j3IrA4MA0PCdzIPDsTESdhYMAsBIMCeG6ggXTqBL-WAe6UoW8UMC8fPAsTpXoj84kfmoGv55NdsOfYhNiJ_vtfGj64FcyBBee9nDmGXSyv1rkUN4JFmTl7tX3C1PO7W107DGGLQcAfElZ7vzZDslEMPi3TbAGpBF5F4LU9khpJ1X8R0bot1xdB0/s127/SpiritualDomain.webp",
          desc: "SYS: 綁定武器技能的高階流派",
        },
        腐蝕凋零: {
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlmCshfQakWh6ahsmYrG8zxuhKWxCzdLg3wOGgMp2w2t_9xycHkODVN8RNJZgMydpxlg_czu5ZFV64F4M48ivNgxfglKFqZek1E6eVHLcqnsfoW7S5xC_daHI8CQQm-TFOwL4nSI5mCx166Rot0l6YZ6bOF6za5j5J3k7eKQFT3fCD47Ve8-bI-QC5Jm0/s127/CorrosiveWither.webp",
          desc: "SYS: 最穩定的萬用型靈佑",
        },
      },
    },
  },
};
