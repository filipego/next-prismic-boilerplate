import Container from "@/app/components/Container";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (

    <div data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>

      {/* Horizontal */}

      {slice.variation === 'horizontal' && (
        <Container classes="hero hero--horizontal">
          <div>
            <PrismicRichText field={slice.primary.heading} components={{
              heading1: ({ children }) => (
                <h1>{children}</h1>
              )
            }} />
            <PrismicRichText field={slice.primary.body} />
            <PrismicNextLink field={slice.primary.button_link} className="btn">{slice.primary.button_text}</PrismicNextLink>
          </div>
          <PrismicNextImage field={slice.primary.Image} />
        </Container>
      )}

      {slice.variation === 'default' && (
        <Container classes="hero">
          <PrismicRichText field={slice.primary.heading} components={{
            heading1: ({ children }) => (
              <h1>{children}</h1>
            )
          }} />
          <PrismicRichText field={slice.primary.body} />
          <PrismicNextLink field={slice.primary.button_link} className="btn">{slice.primary.button_text}</PrismicNextLink>
          <PrismicNextImage field={slice.primary.Image} />
        </Container>
      )}








    </div>

  );
};

export default Hero;
