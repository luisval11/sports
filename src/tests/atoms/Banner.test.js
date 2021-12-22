import { mount, shallow } from "enzyme";
import { Banner } from "../../atoms/banner/Banner";

describe("Test on Banner", () => {
	test("should match initial snapshot", () => {
		let wrapper = shallow(<Banner />);
		expect(wrapper).toMatchSnapshot();
	});

    test("should has the text 'Football World Cup Score Analysis Board'", () => {
		let wrapper = mount(<Banner />);
        expect(wrapper.find('.h5').text().trim()).toBe('Football World Cup Score Analysis Board');
	});
    
});
