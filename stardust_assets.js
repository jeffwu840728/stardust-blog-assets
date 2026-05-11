/* ============================================================
   ★ EXO STARDUST 全域資源資料庫 (Asset Library) ★
   ============================================================ */
const STARDUST_ASSETS = {
  // 🔥 槍火重生專區
  Gunfire: {
    // 🌍 通用資源：武器、密捲、成就
    Global: {
      weapon: {
        鳳鳴: { kind: "法杖", img: "https://.../weapon_phoenix.webp", desc: "高射速範圍傷害" },
        驟雨: { kind: "法杖", img: "https://.../weapon_rain.webp", desc: "單體爆發王者" },
      },
      scroll: {
        元素奧能: { tier: "rare", img: "網址...", desc: "增加元素異常機率..." },
        靈貓九命: { tier: "legendary", img: "網址...", desc: "受傷上限固定為14%" },
        推進器: { tier: "normal", img: "網址...", desc: "衝刺次數+1" },
        破邪護符: { tier: "cursed", img: "網址...", desc: "詛咒密卷：效果說明..." },
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
  },
};