insert into client_projects (client_id, project_name, project_type, project_img, project_description) values (
    ${client_id}, ${project_name}, ${project_type}, ${project_img}, ${project_description}
) returning *;