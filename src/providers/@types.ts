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

export interface IProductContext {
    productsList: IProduct[];
    setproductsList: React.Dispatch<React.SetStateAction<IProduct[]>>;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    shopList: IProduct[];
    setshopList: React.Dispatch<React.SetStateAction<IProduct[]>>;
}
