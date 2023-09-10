import Container from "@/app/components/Container";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Cards`.
 */
export type CardsProps = SliceComponentProps<Content.CardsSlice>;

/**
 * Component for "Cards" Slices.
 */
const Cards = ({ slice }: CardsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >


      <Container classes="cards">
        <PrismicRichText field={slice.primary.heading} />
        {slice.items.map((item, index) => (
          <div className="cards__card" key={index}>
            <>{item.icon}</>
            <PrismicRichText field={item.title} />
            <PrismicRichText field={item.description} />
          </div>
        ))}
      </Container>



    </section>
  );
};

export default Cards;
