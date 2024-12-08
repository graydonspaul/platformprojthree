export default function Schedule() {
    
const data = [
    { name: "Monday", age: 8, gender: "lo mein" },
    { name: "Tuesday", age: 9, gender: "taco" },
    { name: "Wednesday", age: 7, gender: "pizza" },
    { name: "Thursday", age: 7, gender: "gyro" },
    { name: "Friday", age: 7, gender: "stir fry" },
    { name: "Saturday", age: 7, gender: "ravioli" },
    { name: "Sunday", age: 7, gender: "pie" },
]

    return (
        <div>
            <table>
                <tr>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Food</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.gender}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );

}
