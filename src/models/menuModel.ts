import mongoose from "mongoose";

export interface IMenu {
    restaurant: mongoose.Schema.Types.ObjectId;
    food: {
        code: string;
        name: string;
        desc: string;
        type: string;
        price: number;
        pic_url: string;
        option: Array<{
            title: string;
            sub_option: Array<{
                title: string;
                price: number;
            }>
        }>
        is_active: boolean;
    }
}

const menuSchema = new mongoose.Schema<IMenu>({
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    food: {
        code: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: false,
        },
        type: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        pic_url: {
            type: String,
            required: false,
        },
        option: {
            type: [{
                title: {
                    type: String,
                    required: true,
                },
                sub_option: {
                    type: [{
                        title: {
                            type: String,
                            required: true,
                        },
                        price: {
                            type: Number,
                            required: false,
                        }
                    }],
                    required: true,
                }
            }],
            required: false,
        },
        is_active: {
            type: Boolean,
            default: true,
            required: true,
        }
    }
}, { timestamps: true });

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;