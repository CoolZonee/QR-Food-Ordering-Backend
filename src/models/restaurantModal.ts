import mongoose from "mongoose";

interface IRestaurant {
    name: string;
    type: string;
    phone_num: string;
    address: {
        street: string;
        postcode: string;
        city: string;
        state: string;
        country: string;
    };
    company: {
        name: string;
        registration_num: string;
        pic: {
            name: string;
            phone_num: string;
            email: string;
        }
    };
    table: string[];
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}

const restaurantSchema = new mongoose.Schema<IRestaurant>({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    phone_num: {
        type: String,
        required: true,
    },
    address: {
        street: {
            type: String,
            required: true,
        },
        postcode: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
    },
    company: {
        name: {
            type: String,
            required: true,
        },
        registration_num: {
            type: String,
            required: true,
        },
        pic: {
            name: {
                type: String,
                required: true,
            },
            phone_num: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
        }
    },
    table: {
        type: [String],
        required: false,
    },
    is_active: {
        type: Boolean,
        required: true,
        default: true,
    },
}, { timestamps: true })

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant
