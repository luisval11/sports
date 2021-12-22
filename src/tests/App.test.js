import { shallow } from "enzyme";
import Dashboard from "../pages/dashboard/Dashboard";

describe("Test on Dashboard", () => {
	let wrapper = shallow(<Dashboard />);

	test("should match initial Snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
