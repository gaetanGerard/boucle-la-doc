import CustomDevItems from "./CustomDevItems/CustomDevItems";
import Title from "@/components/ui/Title/Title";
import SectionWrapper from '@/components/SectionWrapper/SectionWrapper';

const CustomDevs = ({ data }) => {
    return (
        <SectionWrapper>
            <Title level={2} className="section_title">{data.title}</Title>
            <CustomDevItems items={data.items} />
        </SectionWrapper>
    );
};

export default CustomDevs;
