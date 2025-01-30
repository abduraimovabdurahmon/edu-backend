process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
import dotenv from "dotenv";
dotenv.config();

import { Telegraf } from "telegraf";
import { User } from "./entity/User";


const bot = new Telegraf(process.env.BOT_TOKEN as string);

const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

  

bot.command("start", (ctx)=>{
    try {
        return ctx.reply("Assalomu alaykum, iltimos login va parolni olish uchun kontaktingizni yuboring, kontaktni yuborish uchun faqat pastdagi tugmadan foydalaning!",{
            reply_markup: {
                keyboard: [
                    [
                        {
                            text: "Kontaktni yuborish",
                            request_contact: true,
                        }
                    ]
                ],
                resize_keyboard: true
            }
            }
        );
    } catch (error) {
        console.log(error);
    }
});

bot.on("contact", async (ctx)=>{
    try {
        await ctx.react('❤‍🔥');
        await ctx.sendChatAction('typing');
        await sleep(1000);

        await ctx.sendMessage("Men sizning telefon raqamingizni qabul qildim, iltimos ozroq kuting va men sizga platformaga kirish uchun link yuboraman.", {
            reply_markup:{
                remove_keyboard: true
            }
        });

        // proccess
        await ctx.sendChatAction('typing');

        


        return ctx.sendMessage("Platformaga kirish uchun bir martalik link: https://example.com/example?example=example");

    } catch (error) {
        console.log(error);
    }
});



bot.on("text", (ctx)=>{
    try {
        return ctx.reply("Assalomu alaykum, iltimos login va parolni olish uchun kontaktingizni yuboring, kontaktni yuborish uchun faqat pastdagi tugmadan foydalaning!",{
            reply_markup: {
                keyboard: [
                    [
                        {
                            text: "Kontaktni yuborish",
                            request_contact: true,
                        }
                    ]
                ],
                resize_keyboard: true
            }
            }
        );
    } catch (error) {
        console.log(error);
    }
});


export default bot;
