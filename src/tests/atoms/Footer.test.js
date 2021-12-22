import { mount, shallow } from "enzyme";
import { Footer } from "../../atoms/footer/Footer";

describe("Test on Footer", () => {
	test("should match initial snapshot", () => {
		let wrapper = shallow(<Footer />);
		expect(wrapper).toMatchSnapshot();
	});

    test("should has the text 'Author: Luis Valero García | 2021'", () => {
		let wrapper = mount(<Footer />);
        expect(wrapper.find('p').text().trim()).toBe('Author: Luis Valero García | 2021');
	});
    
});
