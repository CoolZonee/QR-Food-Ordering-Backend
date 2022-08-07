import mongoose from "mongoose";

export interface IOrder {
    table: string;
    session_id: string;
    order: Array<{
        food: Array<{
            food_name: string;
            food_code: string;
            option: Array<{
                title: string;
                price: number;
            }>
            quantity: number;
            price: number;
        }>,
        price: number;
        order_at: Date;
    }>
    total_price: number;
    paid: boolean;
    paid_at: Date;
}

const OrderSchema = new mongoose.Schema<IOrder>({
    table: {
        type: String,
        required: true,
    },
    session_id: {
        type: String,
        required: true,
    },
    order: {
        food: [{
            food_name: {
                type: String,
                required: true,
            },
            food_code: {
                type: String,
                required: true,
            },
            option: [{
                title: {
                    type: String,
                    required: true,
                },
                price: {
                    type: Number,
                    required: false,
                }
            }],
            quantity: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            }
        }],
        price: {
            type: Number,
            required: true,
        },
        order_at: {
            type: Date,
            required: true,
            default: Date.now,
        }
    },
    total_price: {
        type: Number,
        required: true,
    },
    paid: {
        type: Boolean,
        required: true,
        default: false,
    },
    paid_at: {
        type: Date,
        required: false,
    }
}, { timestamps: true });

const Order = mongoose.model("Order", OrderSchema);

export default Order;