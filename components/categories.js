import { Center, ScrollView, Spinner } from "@gluestack-ui/themed";
import { useEffect, useState } from "react"
import CategoryButton from "./category-button";

const Categories = ({ onChange }) => {
    // category declaration
    const [categories, setCategories] = useState([]);
    // active category  declaration
    const [activeCategory, setactiveCategory] = useState(0);
    // loading declaration
    const [isLoading, setisLoading] = useState(true);
    // button category declaration
    const categoryButtonHandler = (index) => {
        setactiveCategory(index);
        onChange(categories[index].name);
    };
    // get categories with API declaration
    const getCategories = () => {
        fetch("https://api-berita-indonesia.vercel.app/")
        .then((response) => response.json()) //respon tersimpan ke bentuk json
        .then((json) => setCategories(json.endpoints[2].paths)) //json akan mengubah kondisi setcategories yang awalnya empty
        .catch((error) => console.error(error)) //jika error 
        .finally(() => setisLoading(false)); //setisLoading yang awalnya true menjadi false
    };

    //fase mmount 
    useEffect(() => {
        getCategories();
    }, []);
    return (
        <>
            {/* if else  */}
            {isLoading ? (
                <Center>
                    <Spinner size={"large"} color={"$white"} />
                </Center>
            ) : (
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {categories.map((category, index) => {
                        return (
                            <CategoryButton 
                                title={category.name}
                                isFirst={index == 0 ? true : false}
                                isActive={index == activeCategory ? true : false}
                                onPress={() => categoryButtonHandler(index)}
                                key={index}
                            />
                        );
                    })}
                </ScrollView>
            )}
        </>
    );
};

export default Categories;