import React, { useState } from "react";
import Board from "/src/components/ui/board/board";
import Title, { TitleSize } from "/src/components/ui/title/title-single";
import Button from "/src/components/ui/button/button";
import ProductCard from "/src/components/ui/product-card/product-card";
import CheckboxList from "/src/components/ui/checkbox-list/checkbox-list";
import {
  LeftColumn,
  StyledOrder,
  AddressInput,
  PriceValue,
  PriceLabel,
  ProductSwiper,
  CheckboxLabel
} from "./styles";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

function OrderPage({ products }) {
  const [selectProductNames, setSelectProductNames] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);
  const selectProducts = selectProductNames.map((id) =>
    products.find((product) => product.id === id)
  );
  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );
  const handleOnClickProduct = (value, index) => {
    if (!selectProductNames.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };
  const [address, setAddress] = useState("");
  const handleBuyClick = () => {
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (product) => `${product.name} - ${product.price} руб.\n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };
  return products && products.length ? (
    <StyledOrder as="form">
      <LeftColumn>
        <Board marginBottom={20} paddingTop={24} paddingBottom={10}>
          <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={12}>
            Выберите продукты
          </Title>
          <CheckboxList
            labelComponent={CheckboxLabel}
            name={"select-products"}
            isGridList={false}
            options={products.map((product) => ({
              value: product.id,
              title: product.name
            }))}
            selectedValues={selectProductNames}
            onChange={setSelectProductNames}
            onClickLabel={handleOnClickProduct}
          />
        </Board>
        <Board>
          <Title size={TitleSize.EXTRA_SMALL} marginBottom={24}>
            Сделать заказ
          </Title>
          <AddressInput
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Введите адрес доставки"
          />
          <PriceLabel as="span">Цена</PriceLabel>
          <PriceValue value={fullPrice}></PriceValue>
          <Button
            minWidth={260}
            onClick={handleBuyClick}
            disabled={!(selectProductNames.length && address)}
          >
            Купить
          </Button>
        </Board>
      </LeftColumn>
      <ProductSwiper
        onSwiper={setSwiperRef}
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fraction"
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiper>
    </StyledOrder>
  ) : (
    "Продукты были слишком вкусные и их разобрали."
  );
}

export default OrderPage;
