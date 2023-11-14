export interface IProduct {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    createdAt: string;
    updatedAt: string;
}

export interface IProductShop {
    product: IProduct;
    quantity: number;
}

export interface IProductContext {
    productsList: IProduct[];
    setProductsList: React.Dispatch<React.SetStateAction<IProduct[]>>;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    shopList: IProductShop[];
    setShopList: React.Dispatch<React.SetStateAction<IProductShop[]>>;
}
