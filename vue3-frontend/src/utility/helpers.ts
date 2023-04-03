export const getErrorArray = (vuelidateObject: any, value: string): Array<String> => {
    let errors: Array<String> = [];
    vuelidateObject.value[value].$errors.map((error: any) => {
        errors.push(error.$message);
    });
    return errors;
}