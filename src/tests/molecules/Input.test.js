import { mount, shallow } from "enzyme";
import Input from "../../molecules/Input";
import { CardTitle } from "react-bootstrap";

describe("Test on Input", () => {

	test("should match initial snapshot", () => {
        let wrapper = shallow(
            <Input
                className="mt-3"
                type="text"
                label="Home Team"
                name="homeTeam"
                placeholder="Spain"
                autoComplete="true"
            />
        );
		expect(wrapper).toMatchSnapshot();
	});

	test("Should have a label of as 'Home Team'", () => {
        let wrapper = mount(
            <Input
                className="mt-3"
                type="text"
                label="Home Team"
                name="homeTeam"
                placeholder="Spain"
                autoComplete="true"
            />
        );
        expect(wrapper.find('.form-label').text().trim()).toBe('Home Team');
	});
});
