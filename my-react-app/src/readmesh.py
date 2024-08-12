# src/readmesh.py
file_path = 'public/bunny.obj'

vertices = []

with open(file_path, 'r') as file:
    for line in file:
        if line.startswith('v '):
            parts = line.split()
            vertices.append((float(parts[1]), float(parts[2]), float(parts[3])))

# แปลงข้อมูลเป็นอาร์เรย์แบบเรียงลำดับ
flat_vertices = [coord for vertex in vertices for coord in vertex]

# แสดงผลจำนวนจุดเวกเตอร์ที่พบ
print(len(vertices))

# เขียนข้อมูลลงไฟล์ใหม่เพื่อใช้งานใน React
output_path = 'src/bunny_vertices.js'
with open(output_path, 'w') as file:
    file.write(f'export const bunnyVertices = {flat_vertices};')
