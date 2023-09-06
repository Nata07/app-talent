import { HStack, Image, ScrollView, Text, VStack } from "native-base";
import AllImage from '../assets/category-all.png';
import CampaignsImage from '../assets/category-campaigns.png';
import CharityImage from '../assets/category-charity.png';
import Eventsmage from '../assets/category-events.png';
import GoodsImage from '../assets/category-goods.png';
import VolunteersImage from '../assets/category-volunteers.png';

interface Category {
    name: string;
}

interface CategoryProps {
    categories: Category[];
}

type ImageByCategories = {
    [key: string]: JSX.Element;
  };

export function CategoryList({categories = []}: CategoryProps) {
    const imageByCategories: ImageByCategories = {
        "All": <Image source={AllImage} alt="All" />,
        "Campaigns": <Image source={CampaignsImage} alt="Campaigns" />,
        "Goods": <Image source={CharityImage} alt="Goods" />,
        "Events": <Image source={Eventsmage} alt="Events" />,
        "Charity": <Image source={GoodsImage} alt="Charity" />,
        "Volunteers": <Image source={VolunteersImage} alt="Volunteers" />,
    }

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <HStack space={6} my={4}>
                {categories.map(item => (
                    <VStack key={item.name} alignItems="center" space={2}>
                        {imageByCategories[item.name]}                            
                        <Text fontSize={12}>{item.name}</Text>
                    </VStack>
                ))}
            </HStack>
        </ScrollView>
    )
}