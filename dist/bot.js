"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const telegraf_1 = require("telegraf");
const bot = new telegraf_1.Telegraf(process.env.BOT_TOKEN);
const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
bot.command("start", (ctx) => {
    try {
        return ctx.reply("Assalomu alaykum, iltimos login va parolni olish uchun kontaktingizni yuboring, kontaktni yuborish uchun faqat pastdagi tugmadan foydalaning!", {
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
        });
    }
    catch (error) {
        console.log(error);
    }
});
bot.on("contact", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield ctx.react('❤‍🔥');
        yield ctx.sendChatAction('typing');
        yield sleep(1000);
        yield ctx.sendMessage("Men sizning telefon raqamingizni qabul qildim, iltimos ozroq kuting va men sizga platformaga kirish uchun link yuboraman.", {
            reply_markup: {
                remove_keyboard: true
            }
        });
        // proccess
        yield ctx.sendChatAction('typing');
        return ctx.sendMessage("Platformaga kirish uchun bir martalik link: https://example.com/example?example=example");
    }
    catch (error) {
        console.log(error);
    }
}));
bot.on("text", (ctx) => {
    try {
        return ctx.reply("Assalomu alaykum, iltimos login va parolni olish uchun kontaktingizni yuboring, kontaktni yuborish uchun faqat pastdagi tugmadan foydalaning!", {
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
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = bot;
