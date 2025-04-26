import SliderItems from "./SliderItems/SliderItems";
import Title from "@/components/ui/Title/Title";
import SectionWrapper from '@/components/SectionWrapper/SectionWrapper';

const Slider = ({ data }) => {
    return (
        <SectionWrapper>
            <Title level={2} className="section_title">{data.title}</Title>
            <SliderItems items={data.items} />
        </SectionWrapper>
    );
};

export default Slider;
