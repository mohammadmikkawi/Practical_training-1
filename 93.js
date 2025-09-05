const fs = require("fs");

jest.mock("fs");

test("mock fs.readFile", done => {
    fs.readFile.mockImplementation((path, enc, cb) => cb(null, "hello"));

    fs.readFile("file.txt", "utf8", (err, data) => {
        expect(data).toBe("hello");
        done();
    });
});
