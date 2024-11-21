const apiUrl = 'http://localhost:8081/category/addcategory';

const addCategory = async (categoryName) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ category_name: categoryName })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }

        const data = await response.json();
        console.log('Category added successfully:', data);
    } catch (error) {
        console.error('Failed to add category:', error.message);
    }
};

// Example usage:
addCategory('New Category');